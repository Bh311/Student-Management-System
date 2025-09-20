import React, { useState } from 'react';
import Hero from '../../components/CommonComponent/HeroSection';
import TabSwitcher from '../../components/CommonComponent/TabSwitcher';
import ReceiptsContent from '../../components/StudentComponent/Receipts';
import PaymentHistoryContent from '../../components/StudentComponent/PaymentHistory';
import MakePaymentContent from '../../components/StudentComponent/MakePayment';
import { DollarSign, CheckCircle, Clock, FileText } from 'lucide-react';


export default function FeesContent() {
    const tabs = ['Make Payment', 'Payment History', 'Receipts'];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    // Function to conditionally render content
    const renderTabContent = () => {
        switch (activeTab) {
            case 'Make Payment':
                return <MakePaymentContent />;
            case 'Payment History':
                return <PaymentHistoryContent />;
            case 'Receipts':
                return <ReceiptsContent />;
            default:
                return <MakePaymentContent />;
        }
    };

    return (
        <div className="p-8 bg-gray-100">
            {/* Header section */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className='text-2xl font-bold text-gray-800 mb-1'>Fee Management</h1>
                    <p className="text-sm text-gray-500">Manage your fee payments and download receipts</p>
                </div>
            </div>

            {/* Hero cards section */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'> 
                {/* Total Fees */}
                <Hero 
                    title="Total Fees" 
                    value="₹102K" 
                    status="Spring 2024 Semester" 
                    icon={<DollarSign className="text-blue-600" size={20} />} 
                    color="bg-blue-100"
                    valueColor="text-gray-800"
                    statusColor="text-gray-500"
                />
                
                {/* Paid Amount */}
                <Hero 
                    title="Paid Amount" 
                    value="₹75K" 
                    status="Payment up to date" 
                    icon={<CheckCircle className="text-green-600" size={20} />} 
                    color="bg-green-100"
                    valueColor="text-green-600"
                    statusColor="text-green-600"
                />

                {/* Outstanding */}
                <Hero 
                    title="Outstanding" 
                    value="₹27K" 
                    status={null}
                    icon={<Clock className="text-orange-500" size={20} />}
                    color="bg-orange-100"
                    valueColor="text-orange-500"
                    showProgressBar={true}
                    progressBarValue={75}
                    progressBarColor="bg-gray-800"
                />
            </div>
            
            {/* Tab switcher container aligned to the left */}
            <div className='mt-6 mb-6'>
                <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/* The dynamically rendered content */}
            {renderTabContent()}
        </div>
    );
}