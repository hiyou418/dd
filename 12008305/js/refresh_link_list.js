var refApp = angular.module('refApp', []);
refApp.controller('refCtrl', ['$scope', '$filter', function($scope, $filter) {
	$scope.img = Math.floor(Math.random() * 37) + 1;
	$scope.currentPage = 1;
	$scope.pageSize = 10;
	$scope.data = [{
		id: 1,
		name: ["뉴 제네레이션즈의", "오프 타임"],
		idol: "島村卯月_渋谷凛_本田未央_시마무라우즈키_시부야린_혼다미오"
	}, {
		id: 2,
		name: ["프릴드 스퀘어 대작전!"],
		idol: "桃井あずき_工藤忍_綾瀬穂乃香_喜多見柚_모모이아즈키_쿠도시노부_아야세호노카_키타미유즈"
	}, {
		id: 3,
		name: ["걸즈 파워의", "걸즈 토크"],
		idol: "月宮雅_岸部彩華_衛藤美紗希_츠키미야미야비_키시베아야카_에토미사키"
	}, {
		id: 4,
		name: ["브리앙뜨 느와르의", "권유"],
		idol: "黒川千秋_水野翠_쿠로카와치아키_미즈노미도리"
	}, {
		id: 5,
		name: ["다같이 공부하자♪"],
		idol: "横山千佳_佐々木千枝_市原仁奈_メアリー・コクラン_요코야마치카_사사키치에_이치하라니나_메어리코크란"
	},	{
		id: 6,
		name: ["섹시 갸루즈의", "갸루 토크★"],
		idol: "大槻唯_城ケ崎美嘉_藤本里奈_오오츠키유이_죠가사키미카_후지모토리나"
	}, {
		id: 7,
		name: ["와의 마음·", "하고로모코마치 옛이야기"],
		idol: "塩見周子_小早川紗枝_시오미슈코_코바야카와사에"
	}, {
		id: 8,
		name: ["강하다구!", "인디비쥬얼즈!"],
		idol: "星輝子_森久保乃々_早坂美玲_호시쇼코_모리쿠보노노_하야사카미레이"
	}, {
		id: 9,
		name: ["즐겁고♪", "사이좋은 뉴 웨이브!"],
		idol: "土屋亜子_大石泉_村松さくら_츠치야아코_오오이시이즈미_무라마츠사쿠라"
	}, {
		id: 10,
		name: ["핫 아트 점핑의", "전력만끽 플랜"],
		idol: "愛野渚_西島櫂_吉岡沙紀_아이노나기사_니시지마카이_요시오카사키"
	}, {
		id: 11,
		name: ["플람 루쥬의", "최강 스페셜 오더"],
		idol: "槙原志保_桐野アヤ_小松伊吹_마키하라시호_키리노아야_코마츠이부키"
	}, {
		id: 12,
		name: ["전국☆밥☆난무"],
		idol: "首藤葵_浜口あやめ_脇山珠美_丹羽仁美_슈토아오이_하마구치아야메_와키야마타마미_니와히토미"
	}, {
		id: 13,
		name: ["로맨틱 투어즈의", "두근두근 정월계획"],
		idol: "並木芽衣子_伊集院惠_江上椿_相馬夏美_나미키메이코_이쥬인메구미_에가미츠바키_소마나츠미"
	}, {
		id: 14,
		name: ["힘차게 가자!", "히트업☆치어스"],
		idol: "斉藤洋子_若林智香_真鍋いつき_사이토요코_와카바야시토모카_마나베이츠키"
	}, {
		id: 15,
		name: ["나른한 초대…♪"],
		idol: "高橋礼子_柊志乃_타카하시레이코_히이라기시노"
	}, {
		id: 16,
		name: ["멜로 옐로의", "○○수업?"],
		idol: "椎名法子_中野有香_미즈모토유카리_시이나노리코_나카노유카"
	}, {
		id: 17,
		name: ["카나미우 챌린지☆"],
		idol: "矢口美羽_今井加奈_야구치미우_이마이카나"
	}, {
		id: 18,
		name: ["쉘·위·댄스♪", "with 솔·카마르"],
		idol: "ナターリア_ライラ_나탈리아_라이라"
	}, {
		id: 19,
		name: ["끝말잇기 게임♪"],
		idol: "赤城みりあ_福山舞_遊佐こずえ_三好紗南_橘ありす_아카기미리아_후쿠야마마이_유사코즈에_미요시사나_타치바나아리스"
	}, {
		id: 20,
		name: ["수수께끼 해결?", "추리소설 추천"],
		idol: "安斎都_古澤頼子_안자이미야코_후루사와요리코"
	}, {
		id: 21,
		name: ["콩뿌리기 파티에", "어서오세요!"],
		idol: "乙倉悠貴_城ケ崎梨花_桜井桃華_木場真奈美_小関麗奈_오토쿠라유우키_죠가사키리카_사쿠라이모모카_키바마나미_코세키레이나"
	}, {
		id: 22,
		name: ["노랫소리를 드높이…", "코즈믹 심포니"],
		idol: "梅木音葉_望月聖_有浦柑奈_クラリス_우메키오토하_모치즈키히지리_아리우라칸나_클라리스"
	}, {
		id: 23,
		name: ["런치타임·V.V."],
		idol: "桐生つかさ_財前時子_高峯のあ_키류츠카사_자이젠토키코_타카미네노아"
	}, {
		id: 24,
		name: ["GIRLS BE NEXT", "초콜릿♪"],
		idol: "白菊ほたる_岡崎泰葉_関裕美_松尾千鶴_시라기쿠호타루_오카자키야스하_세키히로미_마츠오치즈루"
	}, {
		id: 25,
		name: ["수험에 얽힌", "에세트라♪"],
		idol: "新田美波_鷺沢文香_十時愛梨_닛타미나미_사기사와후미카_토토키아이리"
	}, {
		id: 26,
		name: ["무지개색 드리머,", "취향을 말하다, 편☆"],
		idol: "安部菜々_荒木比奈_神谷奈緒_아베나나_아라키히나_카미야나오"
	}, {
		id: 27,
		name: ["어른의 다과회,", "마음가는대로♪"],
		idol: "榊原里美_相原雪乃_日下部若葉_사카키바라사토미_아이하라유키노_쿠사카베와카바"
	}, {
		id: 28,
		name: ["마음에 마음을 더해서,", "전하기…♪"],
		idol: "服部瞳子_和久井留美_三船美優_핫토리토코_와쿠이루미_미후네미유"
	}, {
		id: 29,
		name: ["ERICATHY는 최고야!"],
		idol: "赤西瑛梨華_キャシー･グラハム_아카니시에리카_캐시그라함"
	}, {
		id: 30,
		name: ["여름을 향해서...☆", "BY 세일러 마리나"],
		idol: "松本沙理奈_水木聖來_마츠모토사리나_미즈키세이라"
	}, {
		id: 31,
		name: ["헬시 서바이벌의", "1일 외출 플랜♪"],
		idol: "大和亜季_栗原ネネ_涼宮星花_야마토아키_쿠리하라네네_스즈미야세이카"
	}, {
		id: 32,
		name: ["봄의 추억에", "헬로&굿바이"],
		idol: "依田芳乃_村上巴_요리타요시노_무라카미토모에"
	}, {
		id: 33,
		name: ["해피 에이프릴 풀☆"],
		idol: "龍崎薫_持田亜里沙_東郷あい_류자키카오루_모치다아리사_토고아이"
	},/* {
		id: 34,
		name: ["桜前線、北上中っ♪"],
		idol: "原田美世_篠原礼_兵藤レナ_松山久美子_하라다미요_시노하라레이_효도레나_마츠야마쿠미코"
	}, {
		id: 35,
		name: ["ようこそ♪", "ハートウォーマーの占い館"],
		idol: "杉坂海_藤居朋_井村雪菜_스기사카우미_후지이토모_이무라세츠나"
	}, */{
		id: 36,
		name: ["인디고 벨의", "특훈, 빨리 말하기!"],
		idol: "高森藍子_道明寺歌鈴_타카모리아이코_도묘지카린"
	}, /*{
		id: 37,
		name: ["その名は、パンカーニバル"],
		idol: "大原みちる_ヘレン_오오하라미치루_헬렌"
	}, {
		id: 38,
		name: ["力を合わせて！", "めざセクシー☆"],
		idol: "堀裕子_及川雫_片桐早苗_호리유코_오이카와시즈쿠_카타기리사나에"
	}, {
		id: 39,
		name: ["そこに山があるからだ！"],
		idol: "野々村そら_北川真尋_仙崎恵磨_棟方愛海_노노무라소라_키타가와마히로_센자키에마_무나카타아츠미"
	}, {
		id: 40,
		name: ["尊きHoliday"],
		idol: "大西由里子_ケイト_間中美里_오오니시유리코_케이트_마나카미사토"
	},{
		id: 41,
		name: ["ヒーローになるために"],
		idol: "南条光_池袋晶葉_난죠히카루_이케부쿠로아키하"
	}, */{
		id: 42,
		name: ["버추얼 야구로", "라이드 더 웨이브!!"],
		idol: "姫川由紀_日野茜_沢田麻理菜_히메카와유키_히노아카네_사와다마리나"
	}, /*{
		id: 43,
		name: ["ピュアに、オシャレに、", "大胆に…♪"],
		idol: "浅野風香_奥山沙織_아사노후카_오쿠야마사오리"
	}, {
		id: 44,
		name: ["ちょっぴり", "甘えていきましょ～♪"],
		idol: "海老原菜帆_三村かな子_大沼くるみ_에비하라나호_미무라카나코_오오누마쿠루미"
	} ,{
		id: 45,
		name: ["キラキラ紡いで" ,"これからもShowタイム！"],
		idol: "古賀小春_的場梨沙_結城晴_코가코하루_마토바리사_유우키하루"
	} ,*/{
		id: 46,
		name: ["어두운 하늘,", "근심의 계절"],
		idol: "神崎蘭子_二宮飛鳥_칸자키란코_니노미야아스카"
	}, /*{
		id: 47,
		name: ["876프로가", "사랑을 담아서"],
		idol: "日高愛_水谷絵理_秋月涼_히다카아이_미즈타니에리_아키즈키료"
	}, */{
		id: 48,
		name: ["저기, 당신…♪", "누구로 할래?"],
		idol: "五十嵐響子_北条加蓮_佐久間まゆ_이가라시쿄코_호죠카렌_사쿠마마유"
	}];
	$scope.q = '';

	$scope.getData = function() {
		// needed for the pagination calc
		// https://docs.angularjs.org/api/ng/filter/filter
		return $filter('filter')($scope.data, $scope.q)
	}

	$scope.numberOfPages = function() {
		return Math.ceil($scope.getData().length / $scope.pageSize);
	}

	$scope.setPage = function(n) {
		$scope.currentPage = n;
	}
}]);
//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
refApp.filter('startFrom', function() {
	return function(input, start) {
		start = +start; //parse to int
		return input.slice(start);
	}
});