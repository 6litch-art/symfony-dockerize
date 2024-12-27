<?php

namespace App\Fixture;

use App\Entity\Product; // Import your Product entity if needed
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ProductFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // Insert first product
        $product1 = new Product();
        $product1->setName('Product A');
        $product1->setPrice(100);
        $manager->persist($product1);

        // Insert second product
        $product2 = new Product();
        $product2->setName('Product B');
        $product2->setPrice(200);
        $manager->persist($product2);

        // Insert third product
        $product3 = new Product();
        $product3->setName('Product C');
        $product3->setPrice(300);
        $manager->persist($product3);

        // Commit the data
        $manager->flush();
    }
}
