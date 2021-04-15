package com.example.supermarketStore.serviceImpl;

import com.example.supermarketStore.domain.Store;
import com.example.supermarketStore.service.StoreService;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class StoreServiceImpl implements StoreService {
    private Long storeId = 100L;

    private Map<Long, Store> storeMap = new HashMap<>();
    {
        Store store = new Store();
        store.setId(storeId);
        store.setProductName("Rice");
        store.setProducer("Bamburi");
        store.setGroup("Foods");
        store.setPrice("1500");
        store.setImageUrl("https://images.unsplash.com/photo-1586201375761-83865001e31c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80");
        store.setExpiry("21/11/2021");
        storeMap.put(store.getId(), store);
    }
    @Override
    public Collection<Store> findAll() {
        return storeMap.values();
    }

    @Override
    public Store findById(Long id) {
        return storeMap.get(id);
    }

    @Override
    public Store save(Store store) {
        Long newStoreId = ++storeId;
        store.setId(newStoreId);
        storeMap.put(store.getId(),store);
        return storeMap.get(newStoreId);
    }

    @Override
    public Store update(Store store) {
        storeId = store.getId();
        if(storeMap.get(storeId) != null){
            storeMap.put(storeId, store);
            return storeMap.get(storeId);
        }
        return null;
    }

    @Override
    public Store deleteById(Long id) {
        if(storeMap.get(id) != null){
            return storeMap.remove(id);
        }
        return null;
    }
}
