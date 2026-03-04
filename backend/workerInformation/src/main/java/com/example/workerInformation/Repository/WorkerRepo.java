package com.example.workerInformation.Repository;

import com.example.workerInformation.Model.Workers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkerRepo extends JpaRepository<Workers, Long> {
}
