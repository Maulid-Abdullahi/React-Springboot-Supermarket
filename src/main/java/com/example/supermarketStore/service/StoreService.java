package com.example.supermarketStore.service;

import com.example.supermarketStore.domain.Store;
import java.util.Collection;

public interface StoreService {
    Collection<Store> findAll();

    Store findById(Long id);

    Store save(Store store);

    Store update(Store store);

    Store deleteById(Long id);
}
