package com.nology.courseology;

import javax.persistence.EntityNotFoundException;

public class CourseNotFoundException extends EntityNotFoundException {
    // Use .getMessage() to print message
    public CourseNotFoundException() {
        super("Course cannot be found");
    }
}
