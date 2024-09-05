package main.java.com.iiht.frj.demo.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rest.jpa.entity.Product;
import com.rest.jpa.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository repos;
	
	
	public Product save(Product pro) {
		return repos.save(pro);
	}
	
	public List<Product> getAll() {
		return repos.findAll();
	}
	
	public Product fetchid(long id) {
		Optional<Product> op = repos.findById(id); 
		if(op.isPresent()) {
			return op.get();
		}
		else
			return null;
	}
	
	public Product deleteid(long id) {
		Optional<Product> op = repos.findById(id);
		if(op.isPresent()) {
			repos.deleteById(id);
			return op.get();
		}
		else
			return null;
		
	}
	
	public Product updateProduct(long id, Product p) {
		Optional<Product> op = repos.findById(id);
		if(op.isPresent()) {
			Product ex = op.get();
			ex.setDescription(p.getDescription());
			ex.setPrice(p.getPrice());
			return repos.save(ex);
		}
		else
			return null;
	}
}