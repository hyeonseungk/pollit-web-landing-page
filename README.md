# Pollit Landing Page

가치관 기반 소개팅 앱 **Pollit**의 공식 랜딩 페이지입니다.

## 📋 프로젝트 개요

이 랜딩 페이지는 감각적이고 신뢰감 있는 디자인으로 앱 다운로드 전환을 유도하며, 가치관 기반 소개팅이라는 브랜드 철학을 명확히 전달하는 것을 목표로 합니다.

### 주요 기능

- **반응형 디자인**: 모바일 우선으로 설계된 완전 반응형 레이아웃
- **OS 감지**: 사용자 기기에 따라 적절한 앱스토어 링크 제공
- **부드러운 애니메이션**: 스크롤 기반 애니메이션과 인터랙션
- **SEO 최적화**: 완전한 메타태그 설정 및 오픈그래프 지원
- **성능 최적화**: 이미지 lazy loading 및 성능 모니터링

## 🎨 디자인 가이드

### 브랜드 컬러
- **메인 컬러**: `#6119e6` (로고 색상)
- **서브 컬러**: `#e8dff4` (부드러운 라벤더톤)
- **배경 그라데이션**: `#f8f7ff` → `#e8dff4`

### 폰트
- **주 폰트**: Pretendard (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto

### 톤 & 무드
- 따뜻함, 지성, 진지한 연애
- 감성적이지만 깔끔한 디자인

## 📁 파일 구조

```
pollit-landing-page/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # JavaScript 기능
├── README.md           # 프로젝트 문서
└── favicon.ico         # 파비콘
```

## 🚀 설치 및 실행

### 1. 로컬 개발 환경

```bash
# 리포지토리 클론
git clone <repository-url>
cd pollit-landing-page

# 로컬 서버 실행 (Python 3)
python -m http.server 8000

# 또는 Node.js 사용
npx http-server -p 8000
```

브라우저에서 `http://localhost:8000`으로 접속하여 확인하세요.

### 2. 배포

정적 파일들을 웹 서버에 업로드하거나 다음 플랫폼에 배포할 수 있습니다:

- **Netlify**: 드래그 앤 드롭으로 즉시 배포
- **Vercel**: Git 연동으로 자동 배포
- **GitHub Pages**: 무료 호스팅
- **Amazon S3**: 정적 웹사이트 호스팅

## ⚙️ 커스터마이징

### 2. 브랜드 컬러 변경

`styles.css` 파일에서 CSS 변수를 사용하여 쉽게 변경 가능:

```css
:root {
    --primary-color: #6119e6;
    --secondary-color: #e8dff4;
    --gradient-start: #f8f7ff;
    --gradient-end: #e8dff4;
}
```

### 3. 콘텐츠 수정

`index.html` 파일에서 다음 섹션들을 수정할 수 있습니다:

- Hero 섹션 헤드라인 및 서브헤드라인
- 브랜드 소개 텍스트
- 가치관 통계 및 질문 예시
- 사용자 후기

### 4. 이미지 교체

- 앱스토어 배지는 공식 이미지 사용 (현재 설정됨)
- 커스텀 이미지 추가 시 `assets/` 폴더 생성 권장
- 이미지 최적화 (WebP 형식 권장)

## 📊 애널리틱스 설정

### Google Analytics

HTML `<head>` 섹션에 Google Analytics 스크립트를 추가하세요:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 이벤트 추적

JavaScript에서 자동으로 다음 이벤트를 추적합니다:

- `download_click`: 다운로드 버튼 클릭
- `page_load_time`: 페이지 로딩 시간

## 🔧 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Grid, Flexbox, 애니메이션
- **JavaScript (ES6+)**: 모던 브라우저 지원
- **Google Fonts**: Pretendard 폰트

## 📱 지원 브라우저

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+
- iOS Safari 12+
- Android Chrome 70+

## 🎯 성능 최적화

- **이미지 lazy loading**: 뷰포트 진입 시 로딩
- **CSS 애니메이션**: GPU 가속 사용
- **최소화된 JavaScript**: 불필요한 라이브러리 제거
- **압축 최적화**: 텍스트 파일 gzip 압축 권장

## 🐛 문제 해결

### 일반적인 문제들

1. **앱스토어 링크가 작동하지 않음**
   - `script.js`에서 실제 앱스토어 URL로 변경 필요

2. **폰트가 로드되지 않음**
   - 인터넷 연결 확인 (Google Fonts 사용)

3. **모바일에서 레이아웃 깨짐**
   - 뷰포트 메타태그 확인
   - CSS 미디어 쿼리 점검

4. **애니메이션이 작동하지 않음**
   - JavaScript 에러 콘솔 확인
   - 모던 브라우저 사용 확인

## 📞 연락처

프로젝트 관련 문의사항이 있으시면 다음으로 연락해주세요:

- **이메일**: contact@pollit.com
- **웹사이트**: https://pollit.com

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

**© 2024 Pollit. All rights reserved.** 