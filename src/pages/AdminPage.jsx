import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, LayoutDashboard, Shirt, Package, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AdminPage = () => {
    const { toast } = useToast();

    const handleFeatureClick = (featureName) => {
        toast({
            title: `🚧 ${featureName} Feature Coming Soon!`,
            description: "To build this, please ask me to 'implement the admin dashboard'. This will require a Supabase integration for data management.",
            duration: 5000,
        });
    };

    return (
        <>
            <Helmet>
                <title>Admin Dashboard - T-shirt & More</title>
                <meta name="description" content="Admin dashboard for managing the T-shirt & More store." />
            </Helmet>
            <div className="container mx-auto px-4 py-24 sm:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/10 mb-6">
                        <Shield className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                        <span className="gradient-text">Admin Dashboard</span>
                    </h1>
                    <p className="text-lg text-muted-foreground mb-8">
                        This is your command center. Manage products, view orders, and check user data.
                        Full functionality requires a database connection.
                    </p>
                    <p className="text-sm text-muted-foreground mb-12">
                        To enable these features, please ask me to set up the Supabase integration.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {[
                        { icon: <LayoutDashboard />, name: 'Dashboard' },
                        { icon: <Shirt />, name: 'Manage Products' },
                        { icon: <Package />, name: 'View Orders' },
                        { icon: <Users />, name: 'Customer List' },
                    ].map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            <Button
                                variant="outline"
                                className="w-full h-32 flex flex-col justify-center items-center gap-2 border-border text-foreground hover:bg-accent shiny-effect"
                                onClick={() => handleFeatureClick(item.name)}
                            >
                                <div className="w-8 h-8">{item.icon}</div>
                                <span className="font-semibold">{item.name}</span>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AdminPage;