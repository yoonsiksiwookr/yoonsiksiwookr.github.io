# 김윤식 · 박시우 스케줄 사이트 (GitHub Pages)

## 구성
- `index.html` : 스케줄 페이지 (월 단위, 상단 월/이름 고정)
- `report.html` : 제보 페이지
- `assets/data.js` : **스케줄 데이터 (여기만 수정하면 됩니다)**
- `assets/style.css` : 디자인

## 배포
1. GitHub 저장소(`<아이디>.github.io` 또는 아무 저장소)에 이 폴더 내용을 올립니다.
2. Settings → Pages → Branch `main` / root 선택.

## 스케줄 추가
`assets/data.js`의 `window.SCHEDULE`에 한 줄씩 추가:
`{ date: "2026-11-05", actor: "siwoo", time: "19:00", title: "공연", place: "장소" }`
- actor: `yoonsik`(김윤식) / `siwoo`(박시우)
- 같은 날짜 여러 개 → 시간순 자동 정렬, 날짜는 한 번만 표시
- 시간을 모르면 `time: ""`
- 제보받은 링크가 있으면 `link: "https://..."` 추가 → 스케줄 이름이 그 링크로 연결됩니다 (`http(s)://`만 허용, 새 탭에서 열림)

## 제보 받기 (서버 없이)
GitHub Pages는 정적 호스팅이라 제보 저장용 서버가 없어요. 무료 폼 서비스를 연결합니다.
1. https://formspree.io 가입 → 새 폼 생성 → `https://formspree.io/f/xxxxxxx` 주소 복사
2. `assets/data.js`의 `reportEndpoint`에 붙여넣기
3. 제보가 이메일로 오고, 확인 후 `data.js`에 직접 반영

(대안: Google Form을 만들어 `report.html`에 링크/iframe으로 연결해도 됩니다.)
