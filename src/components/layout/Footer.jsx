import React from 'react';
import { Shirt } from 'lucide-react';

const Footer = () => {
    const footerLinks = {
        'Quick Links': ['Home', 'Products', 'About', 'Contact'],
        'Categories': ['Summer Season', 'Winter season', 'For all times', 'Special'],
        'Connect': ['Instagram', 'Twitter', 'Facebook', 'TikTok'],
    };

    return (
        <footer id="contact" className="bg-muted/20 border-t border-border py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                             <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                                <Shirt className="w-5 h-5 text-black" />
                            </div>
                            <span className="text-xl font-bold gradient-text">T-shirt & More</span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Premium printed youth T-shirts with modern designs and unmatched quality.
                        </p>
                    </div>

                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <p className="text-white font-semibold mb-4">{title}</p>
                            <div className="space-y-2">
                                {links.map(link => (
                                    <p key={link} className="text-muted-foreground hover:text-yellow-400 cursor-pointer transition-colors text-sm">{link}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border-t border-border mt-8 pt-8 text-center">
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} T-shirt & More. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;