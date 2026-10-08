# 김윤식 · 박시우 스케줄 사이트 (GitHub Pages)

## 구성
- `index.html` : 스케줄 페이지 (월 단위, 상단 월/이름 고정)
- `report.html` : 일정추가 페이지
- `assets/data.js` : 사이트 설정(api 주소) + 직접 넣는 스케줄
- `assets/style.css` : 디자인
- `apps-script/Code.gs` : Google Apps Script 코드 (GitHub에는 올리지 않아도 됨)

## 동작 방식
일정추가 페이지 → Google 시트에 저장 → 스케줄 페이지가 시트에서 공개된 일정을 읽어와 자동 표시.
- 시트의 '공개' 체크를 해제하면 해당 일정이 스케줄 페이지에서 사라집니다.
- `Code.gs`의 `AUTO_PUBLISH = false`로 바꾸면 체크한 일정만 공개됩니다.
- `Code.gs` 수정 후에는 배포 → 배포 관리 → 새 버전으로 다시 배포해야 반영됩니다.

## 설정
1. Google 시트 → 확장 프로그램 → Apps Script에 `Code.gs` 붙여넣기
2. 배포 → 새 배포 → 웹 앱 (실행: 나 / 액세스: 모든 사용자)
3. 웹 앱 URL을 `assets/data.js`의 `api`에 입력
4. GitHub 저장소에 `index.html`, `report.html`, `assets/` 업로드

## 직접 일정 추가 (선택)
`assets/data.js`의 `window.SCHEDULE`에 추가:
`{ date: "2026-11-05", actor: "siwoo", time: "19:00", title: "공연", place: "장소", link: "https://..." },`
(actor: `yoonsik` / `siwoo`)
