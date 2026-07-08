// ===== DATA =====
const dims = ["情感需求", "性格匹配", "相处场景", "价值取向"];
const dimLabels = ["情感需求", "性格匹配", "相处场景", "价值取向"];

// 32 questions — each option maps to a boyfriend type
const questions = [
  // 维度1: 情感需求 Q1-Q8
  {
    id: 1, dim: 0, text: "加班到崩溃时你希望他？", opts: [
      { key: "A", text: "\"别干了，我养你\"", type: "总裁" }, { key: "B", text: "带你翘班吃宵夜", type: "痞帅" },
      { key: "C", text: "在家煮好热汤等你", type: "爹系" }, { key: "D", text: "拉你去运动流汗释放", type: "运动" }]
  },
  {
    id: 2, dim: 0, text: "生病时最想要对方？", opts: [
      { key: "A", text: "熬粥喂药守在床边", type: "爹系" }, { key: "B", text: "做营养餐+提醒吃药", type: "暖男" },
      { key: "C", text: "翘课/翘班来逗你开心", type: "痞帅" }, { key: "D", text: "帮你安排好一切", type: "总裁" }]
  },
  {
    id: 3, dim: 0, text: "吵架时他怎么做最让你心软？", opts: [
      { key: "A", text: "先道歉再讲道理", type: "暖男" }, { key: "B", text: "轻轻抱住什么都不说", type: "爹系" },
      { key: "C", text: "写小作文真诚沟通", type: "文艺" }, { key: "D", text: "主动找你沟通解决问题", type: "运动" }]
  },
  {
    id: 4, dim: 0, text: "你在他面前哭了，他会？", opts: [
      { key: "A", text: "温柔擦泪问你怎么了", type: "暖男" }, { key: "B", text: "\"谁欺负你了？\"", type: "总裁" },
      { key: "C", text: "科学分析你这个情绪", type: "理工" }, { key: "D", text: "安静陪在旁边不问原因", type: "文艺" }]
  },
  {
    id: 5, dim: 0, text: "你突然emo不说话，他会？", opts: [
      { key: "A", text: "拉你去运动流汗释放", type: "运动" }, { key: "B", text: "讲冷笑话耍宝逗你", type: "痞帅" },
      { key: "C", text: "默默递块糖什么都不说", type: "暖男" }, { key: "D", text: "查资料帮你分析心情", type: "理工" }]
  },
  {
    id: 6, dim: 0, text: "他送你什么你最心动？", opts: [
      { key: "A", text: "你最需要的实用好物", type: "理工" }, { key: "B", text: "你随口提过的小东西", type: "痞帅" },
      { key: "C", text: "亲手做的手工礼物", type: "文艺" }, { key: "D", text: "带你吃一顿超棒的", type: "暖男" }]
  },
  {
    id: 7, dim: 0, text: "你觉得最浪漫的事是？", opts: [
      { key: "A", text: "包场求婚满城烟火", type: "总裁" }, { key: "B", text: "为你写一首歌弹给你听", type: "文艺" },
      { key: "C", text: "记住你每个小习惯", type: "爹系" }, { key: "D", text: "陪你跑完人生第一个马拉松", type: "运动" }]
  },
  {
    id: 8, dim: 0, text: "一段感情中最重要的？", opts: [
      { key: "A", text: "彼此尊重有独立空间", type: "文艺" }, { key: "B", text: "被坚定地选择和偏爱", type: "总裁" },
      { key: "C", text: "一起变得更好更健康", type: "运动" }, { key: "D", text: "被无条件地呵护照顾", type: "爹系" }]
  },
  // 维度2: 性格匹配 Q9-Q16
  {
    id: 9, dim: 1, text: "你希望他性格底色是？", opts: [
      { key: "A", text: "阳光开朗像小太阳", type: "暖男" }, { key: "B", text: "成熟稳重有安全感", type: "爹系" },
      { key: "C", text: "安静细腻精神世界丰富", type: "文艺" }, { key: "D", text: "简单直接不拐弯抹角", type: "运动" }]
  },
  {
    id: 10, dim: 1, text: "你觉得谈恋爱花钱应该？", opts: [
      { key: "A", text: "有规划有计划不铺张", type: "爹系" }, { key: "B", text: "开心就好，花多点少点无所谓", type: "痞帅" },
      { key: "C", text: "能用钱解决的都不是事", type: "总裁" }, { key: "D", text: "建立账本记录各项支出", type: "理工" }]
  },
  {
    id: 11, dim: 1, text: "遇到难题他第一时间？", opts: [
      { key: "A", text: "陪你一步步拆解问题", type: "爹系" }, { key: "B", text: "查资料算数据找最优解", type: "理工" },
      { key: "C", text: "讲个笑话让你放松后再解决", type: "痞帅" }, { key: "D", text: "拉你出去跑一圈理清思路", type: "运动" }]
  },
  {
    id: 12, dim: 1, text: "你搞砸一件事他会？", opts: [
      { key: "A", text: "对你说\"没什么大不了\"的", type: "文艺" }, { key: "B", text: "\"别慌，我来解决\"", type: "总裁" },
      { key: "C", text: "陪你复盘问题出在哪", type: "爹系" }, { key: "D", text: "画张流程图帮你理逻辑", type: "理工" }]
  },
  {
    id: 13, dim: 1, text: "冷战期间他会？", opts: [
      { key: "A", text: "发沙雕视频破冰", type: "痞帅" }, { key: "B", text: "照常关心但给你空间", type: "爹系" },
      { key: "C", text: "写小作文真诚沟通", type: "文艺" }, { key: "D", text: "约你跑步把话说开", type: "运动" }]
  },
  {
    id: 14, dim: 1, text: "你希望闺蜜怎么评价他？", opts: [
      { key: "A", text: "\"他把你照顾得太好了\"", type: "爹系" }, { key: "B", text: "\"他好有意思，每天都充满活力\"", type: "痞帅" },
      { key: "C", text: "\"跟他在一起你好松弛\"", type: "文艺" }, { key: "D", text: "\"他聪明又靠谱\"", type: "理工" }]
  },
  {
    id: 15, dim: 1, text: "他对你看他手机的态度？", opts: [
      { key: "A", text: "\"我对你没有任何秘密\"", type: "暖男" }, { key: "B", text: "压根不在意你看不看", type: "痞帅" },
      { key: "C", text: "\"我的就是你的\"", type: "总裁" }, { key: "D", text: "帮你整理app归类优化", type: "理工" }]
  },
  {
    id: 16, dim: 1, text: "你更被哪种气质吸引？", opts: [
      { key: "A", text: "稳重可靠让人安心的", type: "爹系" }, { key: "B", text: "聪明专注逻辑清晰的", type: "理工" },
      { key: "C", text: "温柔细腻懂你情绪的", type: "文艺" }, { key: "D", text: "阳光健康充满活力的", type: "运动" }]
  },
  // 维度3: 相处场景 Q17-Q24
  {
    id: 17, dim: 2, text: "你最期待的约会方式？", opts: [
      { key: "A", text: "在家做饭+看电影", type: "爹系" }, { key: "B", text: "户外运动+一起流汗", type: "运动" },
      { key: "C", text: "书店看展+深夜长谈", type: "文艺" }, { key: "D", text: "街头小吃+随性散步", type: "暖男" }]
  },
  {
    id: 18, dim: 2, text: "旅行的方式你更倾向？", opts: [
      { key: "A", text: "说走就走不做攻略", type: "痞帅" }, { key: "B", text: "他安排好一切你放心", type: "爹系" },
      { key: "C", text: "五星酒店+专车接送", type: "总裁" }, { key: "D", text: "登山露营徒步冒险", type: "运动" }]
  },
  {
    id: 19, dim: 2, text: "周末宅家他最接近哪种？", opts: [
      { key: "A", text: "各自看书偶尔对视一笑", type: "文艺" }, { key: "B", text: "窝沙发看电影吃零食", type: "暖男" },
      { key: "C", text: "在书房捣鼓代码或模型", type: "理工" }, { key: "D", text: "早起打球回来带早餐", type: "运动" }]
  },
  {
    id: 20, dim: 2, text: "你们一起做饭他会？", opts: [
      { key: "A", text: "你打下手他掌勺有条不紊", type: "爹系" }, { key: "B", text: "用量杯精准到毫升", type: "理工" },
      { key: "C", text: "叫外卖，说\"油烟伤手\"", type: "总裁" }, { key: "D", text: "边做边偷吃边逗你", type: "痞帅" }]
  },
  {
    id: 21, dim: 2, text: "带他见父母你担心什么？", opts: [
      { key: "A", text: "说话太直不会来事", type: "理工" }, { key: "B", text: "太过细心显得没脾气", type: "暖男" },
      { key: "C", text: "气场太强震住爸妈", type: "总裁" }, { key: "D", text: "太安静怕爸妈觉得他冷", type: "文艺" }]
  },
  {
    id: 22, dim: 2, text: "和朋友聚会带上你，他会？", opts: [
      { key: "A", text: "和兄弟疯但时不时看你", type: "痞帅" }, { key: "B", text: "一直帮你夹菜问你想吃啥", type: "暖男" },
      { key: "C", text: "时常牵你手生怕你不自在", type: "总裁" }, { key: "D", text: "坐你旁边，帮你挡酒", type: "运动" }]
  },
  {
    id: 23, dim: 2, text: "你们一起打游戏他会？", opts: [
      { key: "A", text: "输了就输了重在参与", type: "暖男" }, { key: "B", text: "教你走位教你出装超耐心", type: "理工" },
      { key: "C", text: "边打边贫嘴把你逗笑", type: "痞帅" }, { key: "D", text: "意识超群，细节拉满，带你飞", type: "运动" }]
  },
  {
    id: 24, dim: 2, text: "一起看恐怖片他会？", opts: [
      { key: "A", text: "科学解释这特效有什么好怕", type: "理工" }, { key: "B", text: "提前看剧透告诉你在哪闭眼", type: "爹系" },
      { key: "C", text: "搂着你说\"假的假的我在呢\"", type: "暖男" }, { key: "D", text: "嘲笑你胆小但手臂伸在你面前", type: "总裁" }]
  },
  // 维度4: 价值取向 Q25-Q32
  {
    id: 25, dim: 3, text: "他在朋友圈官宣，你希望是？", opts: [
      { key: "A", text: "画你肖像配一首诗", type: "文艺" }, { key: "B", text: "认真写小作文细数你好", type: "暖男" },
      { key: "C", text: "九宫格配文\"她是我的\"", type: "总裁" }, { key: "D", text: "发一起跑步打卡的合照", type: "运动" }]
  },
  {
    id: 26, dim: 3, text: "你们相处时，以下什么行为会让你感觉最舒服？", opts: [
      { key: "A", text: "各做各的在同一空间安心", type: "文艺" }, { key: "B", text: "什么都不做就躺着聊天", type: "暖男" },
      { key: "C", text: "一起学新东西互相讲给对方听", type: "理工" }, { key: "D", text: "一起运动，变得更好更健康", type: "运动" }]
  },
  {
    id: 27, dim: 3, text: "有人搭讪你，他会？", opts: [
      { key: "A", text: "走过来问对方\"有事吗\"", type: "暖男" }, { key: "B", text: "把你往自己身后拉一步", type: "爹系" },
      { key: "C", text: "走过来搂住你，宣示主权", type: "总裁" }, { key: "D", text: "冷静分析对方意图", type: "理工" }]
  },
  {
    id: 28, dim: 3, text: "纪念日他忘了，他会？", opts: [
      { key: "A", text: "默默补上很用心的道歉", type: "爹系" }, { key: "B", text: "从此设三个提醒加备忘录", type: "理工" },
      { key: "C", text: "笑嘻嘻说\"故意的有惊喜\"", type: "痞帅" }, { key: "D", text: "立刻订餐厅包场补救", type: "总裁" }]
  },
  {
    id: 29, dim: 3, text: "你希望他的穿搭风格？", opts: [
      { key: "A", text: "健身运动装", type: "运动" }, { key: "B", text: "宽松卫衣街头风", type: "痞帅" },
      { key: "C", text: "清瘦文艺棉麻风", type: "文艺" }, { key: "D", text: "简约干净基础款", type: "暖男" }]
  },
  {
    id: 30, dim: 3, text: "日常聊天最接近哪种？", opts: [
      { key: "A", text: "互相分享日常和心情", type: "暖男" }, { key: "B", text: "聊人生聊哲学等深刻话题", type: "文艺" },
      { key: "C", text: "即使斗嘴互损但不影响感情", type: "痞帅" }, { key: "D", text: "话不多但每句是重点", type: "总裁" }]
  },
  {
    id: 31, dim: 3, text: "他对你追星的态度？", opts: [
      { key: "A", text: "客观分析爱豆业务能力", type: "理工" }, { key: "B", text: "记下你爱豆演唱会日期", type: "爹系" },
      { key: "C", text: "陪你一起追一起尖叫", type: "痞帅" }, { key: "D", text: "把他的歌全下载给你", type: "总裁" }]
  },
  {
    id: 32, dim: 3, text: "你偏爱哪种身材类型？", opts: [
      { key: "A", text: "挺拔有气场穿西装好看", type: "总裁" }, { key: "B", text: "清瘦高挑少年感", type: "文艺" },
      { key: "C", text: "结实有腹肌运动型", type: "运动" }, { key: "D", text: "肩宽腰窄衣架子", type: "痞帅" }]
  }
];

// 7 boyfriend types — detailed data
const types = {
  "总裁": {
    name: "霸道总裁", tagline: "你需要的不是一个顺从的人，而是一个为你扛住风雨的臂膀",
    desc: "你喜欢被坚定地偏爱。在你的感情世界里，安全感不是来自甜言蜜语，而是对方在关键时刻的果断和保护——\"别慌，我来解决\"。你不在意他是否事无巨细地嘘寒问暖，但你需要知道：天塌下来的时候，有人替你顶着。你可能是一个外表坚强、内心渴望被照顾的人。霸道总裁式伴侣最大的魅力不是控制，而是让你在疲惫的世界里，终于可以不用一个人扛。",
    tips: ["在外人面前给他面子，关上门你是唯一能让他柔软的人", "不用事事逞强——偶尔示弱，他会用行动告诉你什么叫宠", "他很忙，但他在——节日的惊喜不会少，日常的仪式感交给你", "跟他在一起，别怕冲突——吵完他会用行动道歉"],
    motto: "他不用说爱，他的每一步行动里都是你", img: "zongCai.jpg"
  },
  "痞帅": {
    name: "痞帅男友", tagline: "你要的不是完美恋人，而是让你每天都笑出声的人",
    desc: "你骨子里讨厌刻意和做作。你不喜欢太正经的约会方式，也不吃老套的浪漫把戏——能把你逗笑的人，才真正走进了你心里。痞帅男友看起来吊儿郎当，其实比谁都细腻。他会用最不正经的方式做最靠谱的事，会在你emo的时候不讲道理只讲笑话。你们的关系更像\"最好的朋友+最甜的恋人\"。",
    tips: ["他会贫嘴逗你，但别怀疑他的真心——他把你放在心上才会记住你的每件小事", "给他自由，他反而更粘你——痞帅的人最怕被管", "吵架时不用讲道理，笑出来就算和好了", "他可能不会规划到十年后，但每一个当下他都在乎你"],
    motto: "和你在一起，每一天都想笑", img: "piShuai.jpg"
  },
  "爹系": {
    name: "爹系男友", tagline: "你渴望的不是爱情童话，而是一个可以彻底放松的角落",
    desc: "你内心渴望被温柔而坚定地照顾——不是控制，是体贴；不是说教，是操心。你可能是一个在工作和社交中已经消耗了太多能量的人，回到家只想卸下盔甲，做回小孩。爹系男友最大的魅力不在于年龄，而在于他的责任感和细心——他会记住你的生理期，在你加班时给你煮汤，在你崩溃时什么都不问只是抱着你。",
    tips: ["他的付出是爱的语言——别拒绝，学会接受是他最大的成就感", "偶尔主动为他做点什么，他嘴上不说心里会感动很久", "他的\"唠叨\"就是他的情话——\"多穿点\"\"早点睡\"都等于\"我爱你\"", "在他面前不用逞强，你的脆弱是他最想保护的珍贵"],
    motto: "他不是爸爸，他只是把照顾你当成了本能", img: "dieXi.jpg"
  },
  "运动": {
    name: "运动型男友", tagline: "你骨子里的活力需要被点燃，而不是被熄灭",
    desc: "你身体里住着不安分的能量。你讨厌整天窝在沙发上的周末，也受不了情绪内耗和拐弯抹角。你喜欢阳光、自然、简单的生活方式，也容易被那种生机勃勃的气质吸引。运动型伴侣给你的不是花言巧语，而是一种生命力——你们会一起流汗、一起出发、一起把普通的日子过得热气腾腾。",
    tips: ["约会的尽头是球场和跑道——别抗拒，去享受那种多巴胺的快乐", "他很直男但也很直接——不高兴就说，他不会让你猜", "偶尔陪他看球赛或比赛，他会像小孩一样兴奋", "你们的感情在运动中升温——一起流汗的时刻最亲密"],
    motto: "一起跑过的路，比任何情话都长情", img: "yunDong.jpg"
  },
  "暖男": {
    name: "阳光暖男", tagline: "你不是要轰轰烈烈，而是想要一个永远说\"没事我在\"的人",
    desc: "你需要的不是让人坐过山车的感情，而是一个恒温的人。你可能经历过太多情绪起伏，或是在纷繁的世界里感到疲惫——你渴望被温和地接住。暖男的爱不烫嘴，但从不凉。他记得你随口说过的小事，会在你低落时耐心陪着，会用最柔软的方式让你知道：这个世界没那么糟。",
    tips: ["他的温柔不是因为软弱，而是因为他选择了对你好——别把好当成理所当然", "他可能不够霸道，但他的\"都可以\"背后是\"只要跟你一起\"", "偶尔给他惊喜回应，他会开心很久——因为他最在乎的就是你", "他在乎你的感受胜过对错，但请别伤害他"],
    motto: "他的口袋里总有一块糖，是留给你的", img: "nuanNan.jpg"
  },
  "理工": {
    name: "理工学霸男", tagline: "聪明是你最无法抗拒的春药",
    desc: "你欣赏的从来不是甜言蜜语，而是他看问题时的锐利和专注。你不在意对方会不会说情话，你在意的是他有没有独立思考的能力、解决问题的能力、和对自己领域的深度热爱。理工学霸男的浪漫不是玫瑰，而是\"我给你分析了一下为什么这个方案最优\"\"你上次提的问题我想了三个解决方案\"。",
    tips: ["他不会说花哨的情话，但他的每一次\"我懂了\"都比\"我爱你\"更动人", "别因为他沉浸在自己的世界就觉得被冷落——他爱你才会把你也写进他的时间表", "当你的私人老师——任何不懂的都可以问他，这会让他最有成就感", "他可能在社交场合很安静，但他对你是最认真的"],
    motto: "他的世界里有很多公式，你是唯一不需要证明的答案", img: "liGong.jpg"
  },
  "文艺": {
    name: "文艺男", tagline: "你想要的不是占有，而是懂得",
    desc: "你追求的不是物质堆砌的爱，而是精神上的同频。你适合一个能和你共享内心世界的人——你们可以一整天不说话但彼此都懂，你们的世界里不只有柴米油盐，还有诗、电影、凌晨三点的哲学问题。文艺男/盐系男的爱安静但深沉，他不会轰轰烈烈地追你，但会用一首诗、一幅画、一次深夜长谈让你觉得：终于有人懂我了。",
    tips: ["给他独处空间——他的世界安静了，才能更好地爱你", "你们的约会可能在书店、展览、深夜的长椅上——都是浪漫", "他慢热但深情——一旦认定你就是唯一", "别嫌他想太多——那些你不在意的细节，是他珍藏的温柔"],
    motto: "一整天不说话，但彼此都懂", img: "wenYi.jpg"
  }
};

const imgBase = "./manTypePicture/";
const typeKeys = ["总裁", "痞帅", "爹系", "运动", "暖男", "理工", "文艺"];

// ===== IMAGE PRELOAD =====
// 在答题过程中后台预加载全部7种男友图片到浏览器缓存
// 结果页展示时图片即显，无需等待下载
let preloaded = false;
function preloadAllImages() {
  if (preloaded) return;
  preloaded = true;
  typeKeys.forEach(k => {
    const img = new Image();
    img.src = imgBase + types[k].img;
  });
}

// ===== STATE =====
let answers = [], currentQ = 0;

function startTest() { answers = []; currentQ = 0; preloadAllImages(); showScreen("question"); renderQuestion() }
function showScreen(id) { document.querySelectorAll(".screen").forEach(s => s.classList.remove("active")); document.getElementById(id).classList.add("active"); window.scrollTo(0, 0) }

function renderQuestion() {
  if (currentQ >= questions.length) { showResults(); return }
  const q = questions[currentQ];
  document.getElementById("questionDim").textContent = `${dimLabels[q.dim]} · 第${currentQ + 1}/${questions.length}题`;
  document.getElementById("questionText").textContent = q.text;
  document.getElementById("progressFill").style.width = ((currentQ + 1) / questions.length * 100) + "%";
  document.getElementById("progressText").textContent = `${currentQ + 1}/${questions.length}`;
  const optDiv = document.getElementById("options");
  optDiv.innerHTML = q.opts.map(o => `<div class="option" onclick="selectAnswer(${currentQ},'${o.type}',this)"><span class="letter">${o.key}</span><span class="text">${o.text}</span></div>`).join("");
}

function selectAnswer(qIdx, type, el) {
  answers[qIdx] = type;
  document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
  el.classList.add("selected");
  setTimeout(() => { currentQ++; renderQuestion() }, 280);
}

function showResults() {
  showScreen("loading");
  setTimeout(() => {
    // Calculate scores
    const scores = {}; typeKeys.forEach(k => scores[k] = 0);
    answers.forEach(t => { if (scores[t] !== undefined) scores[t]++ });
    // Find max
    let maxType = typeKeys[0];
    typeKeys.forEach(k => { if (scores[k] > scores[maxType]) maxType = k });
    const result = types[maxType];

    // Render
    document.getElementById("resultType").textContent = result.name;
    document.getElementById("resultTagline").textContent = result.tagline;
    document.getElementById("resultDesc").textContent = result.desc;
    document.getElementById("adviceList").innerHTML = result.tips.map(t => `<li>${t}</li>`).join("");
    document.getElementById("mottoText").textContent = `「 ${result.motto} 」`;

    // Image
    const imgUrl = imgBase + result.img;
    document.getElementById("resultImage").innerHTML =
      `<img src="${imgUrl}" alt="${result.name}" onerror="this.parentElement.innerHTML='<div class=img-placeholder>${result.name}<br>图片加载中…</div>'">`;

    // Bar chart
    document.getElementById("barsSection").innerHTML = typeKeys.map(k => {
      const pct = scores[k] / 32 * 100;
      const cls = (k === maxType) ? "winner" : "";
      return `<div class="bar-item"><span class="bar-label">${types[k].name}</span><div class="bar-track"><div class="bar-fill ${cls}" style="width:${Math.max(pct, 4)}%">${scores[k]}</div></div></div>`;
    }).join("");

    showScreen("results");
  }, 2000);
}

function restartTest() { answers = []; currentQ = 0; showScreen("landing") }

// ===== IMAGE TEST =====
// 调用 testAllImages() 检测全部7种男友图片是否能正常加载
// 或访问页面时加 ?test 参数自动展示测试面板
async function testAllImages() {
  const results = [];
  const testPanel = document.createElement("div");
  testPanel.style.cssText = "position:fixed;top:10px;right:10px;background:#fff;border-radius:16px;padding:16px 20px;box-shadow:0 4px 24px rgba(0,0,0,.15);z-index:99999;max-width:320px;font-size:13px;font-family:monospace";
  testPanel.innerHTML = "<b>🔍 图片加载测试中...</b><br><br>";
  document.body.appendChild(testPanel);

  const promises = typeKeys.map(k => {
    return new Promise((resolve) => {
      const img = new Image();
      const url = imgBase + types[k].img;
      const start = performance.now();
      img.onload = () => {
        const ms = (performance.now() - start).toFixed(0);
        results.push({ type: types[k].name, file: types[k].img, status: "✅", detail: `${img.naturalWidth}×${img.naturalHeight}, ${ms}ms` });
        resolve();
      };
      img.onerror = () => {
        results.push({ type: types[k].name, file: types[k].img, status: "❌ 失败", detail: "文件不存在或无法加载" });
        resolve();
      };
      img.src = url;
    });
  });

  await Promise.all(promises);
  const pass = results.filter(r => r.status === "✅").length;
  const fail = results.filter(r => r.status !== "✅").length;
  testPanel.innerHTML = `<b>📷 图片加载测试结果</b> <span style="font-size:11px;color:#999">${pass}/${results.length} 通过</span><br><br>` +
    results.map(r => `<div style="margin:4px 0;line-height:1.6">${r.status} <b>${r.type}</b><br><span style="font-size:11px;color:#999;margin-left:22px">${r.file} ${r.status === "✅" ? ("· " + r.detail) : ""}</span></div>`).join("") +
    `<br><div style="text-align:center;font-weight:700;color:${fail === 0 ? "#4caf50" : "#e53935"}">${fail === 0 ? "🎉 全部通过！" : "⚠️ " + fail + " 张图片加载失败"}</div>`;
  console.table(results);
  return results;
}

// ===== INIT =====
// 由于脚本放在 </body> 之前，此时 DOM 已就绪
// 若 document.readyState 为 'loading'，则等待 DOMContentLoaded；否则立即执行
function ready(fn) {
  if (document.readyState !== 'loading') { fn(); return; }
  document.addEventListener('DOMContentLoaded', fn);
}

// 页面加载后立即后台预加载所有男友图片
ready(() => {
  setTimeout(preloadAllImages, 600);
});

// URL 参数 ?test 自动触发图片测试
if (location.search.includes("test")) {
  ready(() => {
    setTimeout(testAllImages, 500);
  });
}
