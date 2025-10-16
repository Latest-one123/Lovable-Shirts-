import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { Mail, Key, LogIn, Loader2 } from 'lucide-react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await signIn(email, password);
        if (!error) {
            navigate('/');
        }
        setLoading(false);
    };

    return (
        <>
            <Helmet>
                <title>Login - T-shirt & More</title>
            </Helmet>
            <div className="min-h-[calc(100vh-150px)] flex items-center justify-center bg-pattern p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md p-8 space-y-8 glass-morphism rounded-2xl"
                >
                    <div className="text-center">
                        <h1 className="text-3xl font-black gradient-text">Welcome Back!</h1>
                        <p className="text-muted-foreground mt-2">Log in to continue your style journey.</p>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full pl-10 pr-4 py-3 bg-muted/30 border border-border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-muted-foreground"
                            />
                        </div>
                        <div className="relative">
                            <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full pl-10 pr-4 py-3 bg-muted/30 border border-border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-muted-foreground"
                            />
                        </div>
                        <Button type="submit" size="lg" className="w-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 shiny-effect" disabled={loading}>
                            {loading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : <LogIn className="w-5 h-5 mr-2" />}
                            Login
                        </Button>
                    </form>
                    <p className="text-center text-sm text-muted-foreground">
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-semibold text-yellow-400 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </motion.div>
            </div>
        </>
    );
};

export default LoginPage;