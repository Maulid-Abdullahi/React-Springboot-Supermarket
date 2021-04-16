package com.example.supermarketStore.controller;

import com.example.supermarketStore.domain.Store;
import com.example.supermarketStore.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/store")
@CrossOrigin(origins = "http://localhost:3000")
public class StoreResourceImpl implements StoreResourceInterface<Store>{
    @Autowired
    private StoreService storeService;

    @Override
    public ResponseEntity<Collection<Store>> findAll() {
        return new ResponseEntity<>(storeService.findAll(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Store> findById(Long id) {
        return new ResponseEntity<> (storeService.findById(id), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Store> save(Store store) {
        return new ResponseEntity<>(storeService.save(store), HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Store> update(Store store) {
        return new ResponseEntity<>(storeService.update(store),HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Store> deleteById(Long id) {
        return new ResponseEntity<>(storeService.deleteById(id),HttpStatus.OK);
    }
}
