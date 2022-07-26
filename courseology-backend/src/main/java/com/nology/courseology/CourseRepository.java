package com.nology.courseology;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, String> {
    // <ReturnType> [operation]By[attribute]([parameter])
//    Course findByid(String id);

}
