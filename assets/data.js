/* ============================================================
   스케줄 데이터 — 이 파일만 수정하면 사이트에 반영됩니다.
   - date : "YYYY-MM-DD"
   - actor: "yoonsik"(김윤식) | "siwoo"(박시우)
   - time : "HH:MM" (모르면 "" 로 두면 해당 날짜 맨 아래에 '시간 미정'으로 표시)
   - title: 스케줄 이름 / place: 장소(선택)
   - link : 제보받은 링크(선택). 넣으면 스케줄 이름을 누를 때 해당 링크로 이동
   같은 날짜에 여러 개를 적으면 시간순으로 자동 정렬됩니다.

   추가 예시 (한 줄씩, 끝에 쉼표 , 를 붙여주세요):
   { date: "2026-11-05", actor: "siwoo", time: "19:00", title: "공연", place: "장소", link: "https://..." },
   ============================================================ */
window.SITE = {
  // 제보 받을 곳 (README 참고): Formspree 주소로 바꿔주세요.
  reportEndpoint: "https://formspree.io/f/xjygygap"
};

window.SCHEDULE = [
  // 여기에 일정을 추가하세요.
 { date: "2026-10-18", actor: "yoonsik", time: "14:00", title: "마카오 2nd 팬미", place: "", link: "https://x.com/studio_oak_kr/status/2100091665772167580?s=20" },
 { date: "2026-10-18", actor: "siwoo",   time: "14:00", title: "마카오 2nd 팬미", place: "", link: "https://x.com/studio_oak_kr/status/2100091665772167580?s=20" },
 { date: "2026-10-08", actor: "yoonsik", time: "21:00", title: "SEROVA 예능 더블컬렉션 영상 방송", place: "", link: "" },
 { date: "2026-10-08", actor: "siwoo", time: "21:00", title: "SEROVA 예능 더블컬렉션 영상 방송", place: "", link: "" },
 { date: "2026-10-05", actor: "yoonsik", time: "11:00", title: "SEROVA 신제품 콘셉트 영상 공개", place: "", link: "" },
 { date: "2026-10-05", actor: "siwoo", time: "11:00", title: "SEROVA 신제품 콘셉트 영상 공개", place: "", link: "" },
 { date: "2026-10-08", actor: "yoonsik", time: "11:00", title: "SEROVA 신제품 KV 공개, 판매 시작", place: "", link: "" },
 { date: "2026-10-08", actor: "siwoo", time: "11:00", title: "SEROVA 신제품 KV 공개, 판매 시작", place: "", link: "" },
 { date: "2026-10-08", actor: "yoonsik", time: "20:30", title: "LEECN 라이브방송", place: "", link: "" },

];
