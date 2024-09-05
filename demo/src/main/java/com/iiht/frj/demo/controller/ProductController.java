

package main.java.com.iiht.frj.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rest.jpa.entity.Product;
import com.rest.jpa.service.ProductService;

@RestController
@RequestMapping("/product/api.1.0")
public class ProductController {
	
	@Autowired
	ProductService service;
	
	@PostMapping
	@RequestMapping(path="create",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Product> createProduct(@RequestBody Product productReq){
		Product p = service.save(productReq);
		return new ResponseEntity<Product>(p, HttpStatus.CREATED);
	}
	
	@GetMapping("/productall")
	public ResponseEntity<List<Product>> getproduct(){
		return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
	}
	
	
	@GetMapping("/product/{id}")
	public ResponseEntity<Product> fetchProduct(@PathVariable Long id){
		return new ResponseEntity<Product>(service.fetchid(id), HttpStatus.OK);
	}
	
	@DeleteMapping("/productdelete/{id}")
	public ResponseEntity<Product> deleteProduct(@PathVariable Long id){
		Product op = service.deleteid(id);
		return new ResponseEntity<Product>(op,HttpStatus.OK);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Product> upd(@PathVariable Long id, @RequestBody Product p ){
		Product op = service.updateProduct(id, p);
		return new ResponseEntity<Product>(op,HttpStatus.OK);
	}
	
	//http://localhost:8091/product/api.1.0/productupdate/2
}