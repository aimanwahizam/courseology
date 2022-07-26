package com.nology.courseology;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseService {

    @Autowired
    CourseRepository courseRepository;

    public List<Course> findAllCourses() {
        return courseRepository.findAll();
    }

    public Course findCourseById(String id) {
        Course course = courseRepository.findByid(id);
        if (course == null) {
            throw new CourseNotFoundException();
        }
        return course;
    }
}
