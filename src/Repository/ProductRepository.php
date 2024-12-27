<?php

namespace App\Repository;

use App\Entity\Product;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Product>
 *
 * @method Product|null find($id, $lockMode = null, $lockVersion = null)
 * @method Product|null findOneBy(array $criteria, array $orderBy = null)
 * @method Product[]    findAll()
 * @method Product[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Product::class);
    }

    /**
     * Custom method to find products by a minimum price.
     *
     * @param float $minPrice
     * @return Product[]
     */
    public function findByMinPrice(float $minPrice): array
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.price >= :minPrice')
            ->setParameter('minPrice', $minPrice)
            ->orderBy('p.price', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
