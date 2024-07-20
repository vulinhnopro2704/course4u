package com.mgmtp.cfu.dto.coursereviewdto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CourseReviewOverviewDTO {
    private String userFullName;
    private String userAvatar;
    private Integer rating;
    private String comment;
    private LocalDateTime createdDate;
}