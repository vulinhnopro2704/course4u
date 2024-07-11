package com.mgmtp.cfu.service;

import com.mgmtp.cfu.dto.PageResponse;

import com.mgmtp.cfu.dto.RegistrationDetailDTO;

public interface RegistrationService {
    RegistrationDetailDTO getDetailRegistration(Long id);
    PageResponse getMyRegistrationPage(int page, String status);
}
