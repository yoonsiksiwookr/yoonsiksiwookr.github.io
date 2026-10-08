/* ============================================================
   직접 넣는 스케줄 + 사이트 설정
   ※ 제보로 들어온 일정은 Google 시트에서 자동으로 불러오기 때문에
     여기에 따로 적지 않아도 됩니다. (직접 추가하고 싶을 때만 사용)

   - date : "YYYY-MM-DD"
   - actor: "yoonsik"(김윤식) | "siwoo"(박시우)
   - time : "HH:MM" (모르면 "")
   - title / place(선택) / link(선택)
   예시: { date: "2026-11-05", actor: "siwoo", time: "19:00", title: "공연", place: "장소", link: "https://..." },
   ============================================================ */
window.SITE = {
  // Google Apps Script 웹 앱 주소 (README 참고)
  api: "https://script.google.com/macros/s/AKfycbzZ8SvY471tQ4GOynbZr2ZF5vXcmG2HD1ANQDELG-a_oUfs4klDS1Bm5u_nDX57NnJ_Og/exec"
};

window.SCHEDULE = [
  // 직접 추가할 일정이 있으면 여기에
];
