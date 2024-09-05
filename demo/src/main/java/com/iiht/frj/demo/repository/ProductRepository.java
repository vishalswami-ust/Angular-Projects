package main.java.com.iiht.frj.demo.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.rest.jpa.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}