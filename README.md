# DevSecOps Secure API Pipeline

## 📌 Descrição
Este projeto demonstra a implementação de um pipeline DevSecOps completo para uma API web, integrando segurança desde o desenvolvimento até a entrega contínua (CI/CD). O objetivo é identificar, reportar e bloquear vulnerabilidades automaticamente antes do deploy.

Inclui análise estática (SAST), verificação de dependências, scan de containers e testes dinâmicos (DAST), seguindo boas práticas do OWASP Top 10.

---

## 🏗 Arquitetura
- API REST em Node.js
- Containerização com Docker
- Pipeline CI/CD com GitHub Actions
- Ferramentas de segurança automatizadas

---

## 🔐 Controles de Segurança
- SAST com **Semgrep**
- Scan de dependências e imagens com **Trivy**
- DAST com **OWASP ZAP**
- Bloqueio automático do pipeline em falhas críticas

---

## 🛠 Tecnologias
- Node.js
- Docker
- GitHub Actions
- Semgrep
- Trivy
- OWASP ZAP

---

## 📂 Estrutura
