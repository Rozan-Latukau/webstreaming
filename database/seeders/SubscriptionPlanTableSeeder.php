<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 300000,
                'active_period_in_months' => 2,
                'features' => json_encode(['normal','medium','hard']),
            ],
            [
                'name' => 'Premium',
                'price' => 600000,
                'active_period_in_months' => 4,
                'features' => json_encode(['normal','medium','hard']),
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
