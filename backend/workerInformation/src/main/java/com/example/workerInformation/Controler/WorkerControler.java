package com.example.workerInformation.Controler;

import com.example.workerInformation.Model.Workers;
import com.example.workerInformation.Repository.WorkerRepo;
import com.example.workerInformation.Service.WorkerService;
import org.hibernate.jdbc.Work;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("worker")
public class WorkerControler {

    @Autowired
    WorkerService workerService;

    @Autowired
    WorkerRepo workerRepo;


    @GetMapping(" ")
    public List<Workers> getWorkers() {

        return workerService.getWroker();
    }

    @PostMapping(" ")
    public Workers CreateWorker(@RequestBody Workers worker) {
        return workerRepo.save(worker);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Workers> getWrokerid(@PathVariable Long id) {
        Optional<Workers> findId = workerRepo.findById(id);
        if (findId.isPresent()) {
            return ResponseEntity.ok(findId.get());
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity<Workers> updateWroker(
            @PathVariable Long id,
            @RequestBody Workers workerDetalis) {

        Workers worker = workerRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Worker not found with id " + id));

        worker.setFirstName(workerDetalis.getFirstName());
        worker.setLastName(workerDetalis.getLastName());
        worker.setEmail(workerDetalis.getEmail());

        Workers updatedWorker = workerRepo.save(worker);

        return ResponseEntity.ok(updatedWorker);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteWroker(@PathVariable Long id){
        Workers worker = workerRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Worker not found with id " + id));
        workerRepo.delete(worker);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}
