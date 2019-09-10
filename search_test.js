Feature('Search On Naver');

const SEARCH_QUERY_SELECTOR = 'query';

Scenario('Search the weather', (I) => {
  I.amOnPage('https://www.naver.com/');

  I.fillField('query', '날씨');
  I.click('검색');

  I.see('미세먼지');
});

Scenario('Search 럭키짱 comics', (I) => {
  I.amOnPage('https://www.naver.com/');

  I.fillField('query', '럭키짱');
  I.click('검색');

  I.see('김성모');
});

Scenario(`사용자는 여러 주제를 손쉽게 찾기 위해
          하나의 주제를 검색하고 그 화면에서 바로 다른 주제를 검색할 수 있다.`, (I) => {
  I.amOnPage('https://www.naver.com/');

  I.fillField(SEARCH_QUERY_SELECTOR, '럭키짱');
  I.click('검색');

  I.see('김성모');

  I.fillField('query', '김성모');
  I.click('검색');

  I.see('근성');
  I.see('화백');
});
