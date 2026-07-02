# Stellar UFO 홈페이지 (stellar-homepage)

무인 멀티 플랫폼 가챠샵 Stellar UFO 공식 홈페이지 소스.

## 배포 현황
- GitHub 저장소: https://github.com/dingojheon-cpu/stellar-ufo-homepage
- 라이브(임시): https://stellar-ufo-homepage.pages.dev
- 연결 도메인: https://stellarufo.com  (Cloudflare Pages, DNS 초기화 후 자동 활성)
- 호스팅: Cloudflare Pages (GitHub 연동 -> 커밋 시 자동 재배포)

## 폴더 구조
- index.html : 메인 페이지
- pages/ : 서브페이지 (modules / method / trust / faq)
- assets/ : 이미지(히어로/로고 등)
- _ds/ : 디자인 시스템 번들(CSS 토큰 + JS 번들)
- *.jsx : 화면 구성 스크립트(브라우저에서 Babel로 실행)
- site.css : 사이트 커스텀 스타일
- screenshots/ : 제작 중 참고 캡처(사이트 동작과 무관, 삭제 가능)

## 수정 -> 재배포
1. 이 폴더 파일 수정
2. GitHub 저장소(stellar-ufo-homepage)에 변경 파일 커밋/업로드
3. Cloudflare Pages 자동 재배포(몇 분 후 반영)

## 상담신청 폼 -> 구글시트 + Slack 실시간 알림
- 폼 제출 시 home-form.jsx가 Google Apps Script 웹앱으로 데이터 전송(fetch, text/plain).
- Apps Script가 구글시트에 행 추가 + Slack Incoming Webhook으로 알림 전송.
- 구글시트: "Stellar UFO 상담신청 DB" (dingojheon@gmail.com 계정)
- Apps Script 프로젝트: "상담신청 알림 스크립트" (구글시트에 바인딩, 확장 프로그램 > Apps Script)
- Slack 채널: #상담신청-알림 (Stellar UFO Hermes 앱의 Incoming Webhook 연결)
- 웹앱 엔드포인트는 home-form.jsx 상단 CONSULT_ENDPOINT 상수에 있음.
- Apps Script 코드 수정 후에는 "배포 관리 > 수정(연필) > 버전: 새 버전 > 배포"로 업데이트해야 실제 반영됨(그냥 저장만으로는 배포판에 반영 안 됨).
