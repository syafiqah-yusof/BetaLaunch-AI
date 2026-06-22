## COMPLIANCE PROFILE: DataFlow Analytics

### 1. Data Security & Encryption
- In-Transit: All customer data is encrypted in transit using TLS 1.3.
- At-Rest: Customer data is encrypted at rest using AES-256 encryption.
- Key Management: Encryption keys are managed by AWS KMS.

### 2. Access Control & Identity Management
- Authentication/MFA: Employees access the system via SSO with MFA enforced.
- Offboarding/Revocation: Immediate access revocation within 1 hour of HR notification.
- Privilege Scoping: Least-privilege access principles are followed.

### 3. Operational Resilience & DR
- Backups: Daily backups run to S3 with cross-region replication.
- RTO/RPO: 4-hour RTO and 1-hour RPO.
- Incident Response: Security incidents are reported to the CISO within 1 hour of detection.

### 4. Regulatory Compliance
- Data Hosting/Jurisdiction: Hosted on AWS (us-east-1). GDPR data stays in us-east-1.
- Security Leadership: No designated Data Protection Officer (DPO) is appointed; the Chief Information Security Officer (CISO) handles compliance.
- Retention/Deletion: Customer data is retained for 90 days post-customer termination.

## CRITICAL SECURITY COMPLIANCE GAPS IDENTIFIED
- **Lack of Designated Data Protection Officer (DPO)**: The company claims GDPR data residency in us-east-1, but does not have a designated DPO. Under GDPR Article 37, a designated DPO may be legally required depending on the nature and scale of data processing.
- **Missing Vulnerability Management and Penetration Testing**: No protocols, schedules, or records of third-party penetration testing or vulnerability scanning are documented.
- **Unverified Backup Encryption and Testing**: While daily backups are replicated to S3, there is no explicit mention of backup encryption or regular backup restoration testing.
- **Lack of Disaster Recovery (DR) Testing**: Target RTO (4 hours) and RPO (1 hour) are defined, but there is no documentation of regular DR simulation drills to verify these targets.
- **Missing Employee Security Awareness Training**: No formal security training or background check policies are mentioned for employees.
- **SOC 2 Verification**: The company notes they are SOC2 compliant, but no official SOC 2 report availability or continuous compliance monitoring is defined.
