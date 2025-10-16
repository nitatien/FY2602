
import type { TravelData } from '../types';

export const travelData: TravelData = {
  tripTitle: "京都八日深度之旅：古韻、梅香與匠心",
  summary: "這是一趟為期八天的京都客製化旅程，專為喜愛寬鬆步調、深度體驗的您設計。行程完美融合了自然風光、千年古蹟與現代購物樂趣，並穿插了賞梅、溫泉、品酒及甜點巡禮等特色活動，帶您領略京都冬末初春的獨特魅力。",
  transportation: {
    recommendation: "建議購買一張 ICOCA 卡，用於搭乘JR、地鐵和大部分私鐵，方便快捷。在市內景點密集的日子，可購買「巴士一日券」節省交通費。從關西機場到京都，最推薦搭乘「HARUKA」特快列車，快速舒適。",
    options: [
      { name: "ICOCA卡", description: "可儲值的交通IC卡，適用於關西地區大部分交通工具，省去每次購票的麻煩。", cost: "初次購買 ¥2000 (含 ¥500押金)" },
      { name: "京都巴士一日券", description: "在指定範圍內無限次搭乘市營巴士，適合一天內會搭乘3次以上的行程。", cost: "¥700" },
      { name: "HARUKA 機場快線", description: "從關西國際機場直達京都車站最快的方式，約80分鐘車程。", cost: "約 ¥3,200 (自由席)" }
    ]
  },
  accommodations: [
    { name: "美滿如家 MIMARU SUITES 京都四條", dates: "2026/02/25 - 02/28", notes: "公寓式酒店，空間寬敞，設有廚房，適合家庭或小團體，地理位置優越。" },
    { name: "京都七條雅飯店 MIYABI HOTEL NANJO", dates: "2026/02/28 - 03/02", notes: "設計現代並融入日式元素，靠近京都車站，交通便利。" },
    { name: "虹夕諾亞 京都 HOSHINOYA Kyoto", dates: "2026/03/02 - 03/04", notes: "位於嵐山的頂級奢華旅館，需乘船抵達，提供無與倫比的靜謐與精緻體驗。" }
  ],
  foodGuide: [
      { name: "錦市場", type: "Market", specialty: "京漬物、玉子燒、海鮮串", day_mentioned: 2 },
      { name: "中村藤吉", type: "Dessert", specialty: "抹茶聖代、抹茶蕎麥麵", day_mentioned: 5 },
      { name: "月桂冠大倉紀念館", type: "Sake", specialty: "清酒品鑑", day_mentioned: 5 },
      { name: "祇園 Tanto", type: "Restaurant", specialty: "京風大阪燒", day_mentioned: 1 },
      { name: "嵯峨とうふ 稲", type: "Restaurant", specialty: "湯豆腐料理", day_mentioned: 3 },
      { name: "鍵善良房", type: "Dessert", specialty: "葛切", day_mentioned: 7 },
      { name: "茶寮寶泉", type: "Dessert", specialty: "蕨餅", day_mentioned: 6 }
  ],
  dailyPlan: [
    {
      day: 1,
      date: "2026-02-25 (三)",
      title: "抵達古都・祇園夜色初探",
      theme: "初見京都的典雅與靜謐",
      events: [
        { time: "09:20", activity: "出發", description: "搭乘星宇航空從桃園國際機場飛往關西國際機場(KIX)。", type: "Travel" },
        { time: "13:30", activity: "抵達KIX機場", description: "辦理入境手續後，在機場JR綠色窗口購買HARUKA車票與ICOCA卡。", type: "Travel" },
        { time: "14:30", activity: "前往京都", description: "搭乘HARUKA特快列車，約80分鐘直達京都車站。", type: "Travel" },
        { time: "16:30", activity: "飯店入住", description: "前往「美滿如家 MIMARU SUITES 京都四條」辦理入住，稍作休息。", type: "Lodging" },
        { time: "18:30", activity: "晚餐：祇園 Tanto", description: "漫步至祇園，在充滿風情的花見小路附近享用美味的京風大阪燒。", type: "Dining" },
        { time: "20:00", activity: "夜遊祇園白川", description: "餐後沿著白川南通散步，欣賞石板路、柳樹與傳統町屋構成的優美夜景。", type: "Sightseeing", photo_spot: "巽橋上是拍攝白川夜景的絕佳地點，能捕捉到古典京都的氛圍。" }
      ]
    },
    {
      day: 2,
      date: "2026-02-26 (四)",
      title: "金閣閃耀・梅苑飄香",
      theme: "經典巡禮與梅花盛宴",
      events: [
        { time: "09:30", activity: "金閣寺 (鹿苑寺)", description: "參觀金碧輝煌的舍利殿，欣賞其在鏡湖池中的完美倒影。", type: "Sightseeing", photo_spot: "從池對岸拍攝被松樹環繞的金色舍利殿倒影，是明信片般的經典角度。" },
        { time: "11:30", activity: "北野天滿宮", description: "正值梅花季，欣賞境內廣大的梅苑，梅花盛開，美不勝收。此處也是祈求學業順利聞名的神社。", type: "Activity", details: "梅苑需另外購票，附茶點。" },
        { time: "13:00", activity: "午餐：天神さん周邊", description: "在天滿宮附近尋找傳統的烏龍麵或定食店享用午餐。", type: "Dining" },
        { time: "15:00", activity: "錦市場美食探索", description: "被稱為「京都的廚房」，品嚐各式京漬物、玉子燒、豆乳甜甜圈等道地小吃。", type: "Shopping" },
        { time: "17:30", activity: "返回飯店休息", description: "滿載而歸，回飯店稍作休息，整理戰利品。", type: "Lodging" },
        { time: "19:00", activity: "晚餐：先斗町", description: "探索充滿江戶時代風情的先斗町，這條狹窄的巷弄裡有各式各樣的餐廳可供選擇。", type: "Dining" }
      ]
    },
    {
      day: 3,
      date: "2026-02-27 (五)",
      title: "嵐山風光一日遊 (上)",
      theme: "竹林幽徑與自然之美",
      events: [
        { time: "09:00", activity: "前往嵐山", description: "搭乘JR嵯峨野線至「嵯峨嵐山」站。", type: "Travel" },
        { time: "10:00", activity: "天龍寺", description: "參觀世界文化遺產，其曹源池庭園是日本最早指定的史跡特別名勝，景色壯麗。", type: "Sightseeing" },
        { time: "11:30", activity: "竹林之道", description: "漫步在高聳入雲的竹林小徑中，感受陽光從竹葉間灑落的靜謐氛圍。", type: "Sightseeing", photo_spot: "清晨或傍晚遊客較少時，更能拍出空靈無人的竹林美景。" },
        { time: "12:30", activity: "午餐：嵯峨とうふ 稲", description: "品嚐嵐山地區有名的湯豆腐料理，口感細膩，滋味清雅。", type: "Dining" },
        { time: "14:00", activity: "渡月橋", description: "橫跨桂川的渡月橋是嵐山的地標，在此可欣賞開闊的山水景色。", type: "Sightseeing" },
        { time: "15:00", activity: "% Arabica 咖啡", description: "在渡月橋旁的% Arabica咖啡店買杯香醇的拿鐵，享受片刻悠閒。", type: "Activity" },
        { time: "16:00", activity: "嵐山猴子公園", description: "稍微爬一小段山路，即可抵達猴子公園，近距離觀察日本獼猴，並可俯瞰京都市景。", type: "Activity" }
      ]
    },
    {
      day: 4,
      date: "2026-02-28 (六)",
      title: "東山漫步・清水舞台",
      theme: "古寺巡禮與坂道風情",
      events: [
        { time: "10:00", activity: "更換飯店", description: "辦理退房，將行李寄放至新飯店「京都七條雅飯店」。", type: "Lodging" },
        { time: "11:00", activity: "清水寺", description: "參觀京都最古老的寺院之一，從著名的清水舞台上眺望京都市景。", type: "Sightseeing", photo_spot: "從子安塔方向回望清水舞台，可以將舞台與京都市景一同攝入，是標準的拍攝角度。" },
        { time: "13:00", activity: "午餐：清水坂周邊", description: "在清水寺前的參道上解決午餐，有許多湯豆腐、蕎麥麵可選擇。", type: "Dining" },
        { time: "14:30", activity: "二年坂・三年坂", description: "漫步在充滿古都風情的石板路上，兩旁是傳統的町屋商店，適合購物與拍照。", type: "Shopping" },
        { time: "16:00", activity: "高台寺", description: "參觀豐臣秀吉之妻寧寧所建的寺院，庭園設計優美，氛圍寧靜。", type: "Sightseeing" },
        { time: "18:00", activity: "晚餐與飯店入住", description: "結束東山行程後，返回「京都七條雅飯店」正式辦理入住。", type: "Dining" }
      ]
    },
    {
      day: 5,
      date: "2026-03-01 (日)",
      title: "千本鳥居・酒鄉品酩",
      theme: "信仰之力與清酒醇香",
      events: [
        { time: "09:00", activity: "伏見稻荷大社", description: "走進由上萬座紅色鳥居構成的「千本鳥居」隧道，感受震撼的視覺與信仰力量。", type: "Sightseeing", photo_spot: "在鳥居隧道的岔路口（奧社奉拜所附近）人潮較少，更容易拍出鳥居層層疊疊的縱深感。" },
        { time: "12:00", activity: "午餐：祢ざめ家", description: "品嚐稻荷大社附近的百年老店，以鰻魚飯和稻荷壽司聞名。", type: "Dining" },
        { time: "14:00", activity: "伏見酒鄉散策", description: "搭乘電車前往伏見桃山地區，這裡是日本著名的清酒產地。", type: "Activity" },
        { time: "15:00", activity: "月桂冠大倉紀念館", description: "參觀清酒博物館，了解釀酒過程，並可品嚐多款清酒。", type: "Activity", details: "門票包含清酒品嚐與紀念小瓶清酒。" },
        { time: "17:00", activity: "宇治抹茶巡禮", description: "搭車前往宇治，在「中村藤吉」本店品嚐道地的抹茶甜點。", type: "Dessert" }
      ]
    },
    {
      day: 6,
      date: "2026-03-02 (一)",
      title: "哲學之道・銀閣侘寂",
      theme: "靜思之路與奢華隱居",
      events: [
        { time: "10:00", activity: "退房與入住虹夕諾亞", description: "辦理退房，搭乘計程車前往「虹夕諾亞 京都」的渡月橋乘船處，體驗獨特的乘船入住。", type: "Lodging" },
        { time: "12:00", activity: "飯店內午餐與休息", description: "在虹夕諾亞享受精緻的午餐，並體驗館內的設施與寧靜氛圍。", type: "Dining" },
        { time: "14:30", activity: "銀閣寺 (慈照寺)", description: "參觀充滿侘寂美學的銀閣寺，欣賞其枯山水庭園與獨特的觀音殿。", type: "Sightseeing", photo_spot: "登上庭園後方的小徑，可以俯瞰整個銀閣寺的庭園景致。" },
        { time: "16:00", activity: "哲學之道", description: "沿著琵琶湖疏水道漫步，這條小徑因哲學家西田幾多郎曾在此散步而得名。雖櫻花未開，但沿途風景依然清幽。", type: "Sightseeing" },
        { time: "18:00", activity: "晚餐：虹夕諾亞", description: "返回飯店，享用飯店提供的懷石料理晚餐，是一場視覺與味覺的極致饗宴。", type: "Dining" }
      ]
    },
    {
      day: 7,
      date: "2026-03-03 (二)",
      title: "嵐山隱逸・溫泉療癒",
      theme: "奢華體驗與身心放鬆",
      events: [
        { time: "全日", activity: "虹夕諾亞自由活動", description: "盡情享受在虹夕諾亞的時光。可以參加飯店提供的文化體驗活動，如聞香、抄經，或是在房內欣賞保津川的景色。", type: "Activity" },
        { time: "10:00", activity: "嵐山再探索 (選)", description: "若想外出，可搭船至對岸，租借自行車或探訪之前未竟的景點，如常寂光寺或祇王寺。", type: "Sightseeing" },
        { time: "13:00", activity: "午餐：嵐山よしむら", description: "在能欣賞渡月橋景色的餐廳，享用美味的蕎麥麵。", type: "Dining" },
        { time: "15:00", activity: "京都甜點：鍵善良房", description: "返回京都市區，前往祇園的「鍵善良房」品嚐清涼滑順的黑糖葛切。", type: "Dessert" },
        { time: "17:00", activity: "溫泉體驗", description: "前往「風風之湯」或飯店內的設施，享受溫泉，洗去旅途的疲憊。", type: "Activity", details: "虹夕諾亞本身無溫泉，可安排計程車前往附近的溫泉設施。" },
        { time: "19:30", activity: "最後的京都晚餐", description: "選擇一家心儀的餐廳，享受在京都的最後一頓晚餐。", type: "Dining" }
      ]
    },
    {
      day: 8,
      date: "2026-03-04 (三)",
      title: "古都追憶・前往東京",
      theme: "告別京都，迎向下一段旅程",
      events: [
        { time: "09:30", activity: "飯店早餐與整理", description: "在虹夕諾亞享用最後一頓精緻早餐，整理行李。", type: "Dining" },
        { time: "11:00", activity: "辦理退房", description: "辦理退房手續，搭船離開虹夕諾亞。", type: "Lodging" },
        { time: "12:00", activity: "最後的購物", description: "前往京都車站或四條河原町地區，進行最後的購物，購買伴手禮。", type: "Shopping" },
        { time: "14:00", activity: "前往機場", description: "從京都車站搭乘HARUKA特快列車或機場巴士前往關西國際機場(KIX)。", type: "Travel" },
        { time: "下午", activity: "飛往東京", description: "搭乘下午的班機，結束美好的京都之旅，前往下一站東京。", type: "Travel" }
      ]
    }
  ]
};
   