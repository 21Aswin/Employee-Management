package com.example.workerInformation.Service;

import com.example.workerInformation.Model.Workers;
import com.example.workerInformation.Repository.WorkerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkerService {

    @Autowired
    WorkerRepo workerRepo;

    public List<Workers> getWroker(){
        return workerRepo.findAll();

    }

}
