package com.mgmtp.cfu.controller

import com.mgmtp.cfu.dto.RegistrationDetailDTO
import com.mgmtp.cfu.exception.RegistrationNotFoundException
import com.mgmtp.cfu.mapper.RegistrationDetailMapper
import com.mgmtp.cfu.service.RegistrationService
import org.springframework.http.ResponseEntity
import spock.lang.Specification
import spock.lang.Subject

class RegistrationControllerSpec extends Specification {
    def registrationService = Mock(RegistrationService)
    @Subject
    RegistrationController registrationController = new RegistrationController(registrationService)
    def "test getDetailRegistration"() {
        given:
            def registrationId = 1
        RegistrationDetailDTO registrationDetailDTO = RegistrationDetailDTO.builder().build()
            registrationService.getDetailRegistration(registrationId) >> registrationDetailDTO
        when:
            ResponseEntity<RegistrationDetailDTO> response = registrationController.getDetailRegistration(registrationId)
        then:
            response.statusCode.value() == 200
            response.body == registrationDetailDTO
    }

    def "test getDetailRegistration failed"() {
        given:
            Long id = 999L
        when:
            registrationService.getDetailRegistration(id) >> { throw new RegistrationNotFoundException("Registration not found") }
        and:
            registrationController.getDetailRegistration(id)
        then:
            def ex = thrown(RegistrationNotFoundException)
            ex.message == "Registration not found"
    }
}