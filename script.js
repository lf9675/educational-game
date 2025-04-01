// ---- 1. 数据准备 ----

// !!! 重要提示 !!!
// 下面的 wordDictFull 变量需要包含你从 DOCX 文件中提取并验证过的所有单词对。
// 这里只包含了一部分作为示例，请务必用你自己的完整、准确的数据替换它！
const wordDictFull = {
    "friend": "朋友", "dada": "爸爸", "queen": "女王", "boy": "男孩", "parents": "父母",
    "visitor": "参观者", "girl": "女孩", "neighbour": "邻居", "mother": "母亲",
    "grandparents": "祖父母", "principal": "校长", "father": "父亲",
    "grandma/grandmother": "（外）祖母", "university student": "大学生", "sister": "姐妹",
    "pen pal": "笔友", "brother": "兄弟", "aunt": "姑姑", "tourist": "旅行者",
    "uncle": "叔叔；舅舅", "cousin": "堂兄弟；堂姐妹", "people": "人物", "man": "男人",
    "son": "儿子", "robot": "机器人", "woman": "女人", "daughter": "女儿", "miss": "小姐",
    "mr.": "先生", "baby": "婴儿", "grandpa/grandfather": "（外）祖父", "lady": "女士；小姐",
    "kid": "小孩", "mom": "妈妈", "classmate": "同学", "jacket": "夹克衫", "shoes": "鞋子",
    "boots": "靴子", "shirt": "衬衫", "sweater": "毛衣", "hat": "帽子（有沿的）",
    "t-shirt": "丅恤衫", "coat": "上衣", "cap": "便帽", "skirt": "短裙",
    "raincoat": "雨衣", "sunglasses": "太阳镜", "dress": "连衣裙", "shorts": "短裤",
    "tie": "领带", "jeans": "牛仔裤", "sneakers": "网球鞋", "scarf": "围巾",
    "pants": "长裤", "slippers": "拖鞋", "gloves": "手套", "socks": "袜子",
    "sandals": "凉鞋", "pen": "钢笔", "pencil": "铅笔", "pen case": "铅笔盒",
    "ruler": "尺子", "book": "书", "bag": "包", "comic book": "漫画", "postcard": "明信片",
    "schoolbag": "书包", "newspaper": "报纸", "eraser": "橡皮", "crayon": "蜡笔",
    "sharpener": "卷笔刀", "story-book": "故事书", "notebook": "笔记本",
    "chinese book": "语文书", "english book": "英语书", "magazine": "杂志",
    "math book": "数学书", "dictionary": "词典", "cat": "猫", "mouse": "老鼠",
    "hen": "母鸡", "dog": "狗", "squirrel": "松鼠", "turkey": "火鸡", "pig": "猪",
    "kangaroo": "袋鼠", "lamb": "小羊", "duck": "鸭", "monkey": "猴", "sheep": "绵羊",
    "rabbit": "兔", "panda": "熊猫", "goat": "山羊", "horse": "马", "bear": "熊",
    "cow": "奶牛", "elephant": "大象", "lion": "狮子", "donkey": "驴", "ant": "蚂蚁",
    "tiger": "老虎", "squid": "鱿鱼", "fish": "鱼", "fox": "狐狸", "lobster": "龙虾",
    "bird": "鸟", "zebra": "斑马", "shark": "鲨鱼", "eagle": "鹰", "deer": "鹿", // 修正
    "seal": "海豹", "beaver": "海狸", "giraffe": "长颈鹿", "sperm whale": "抹香鲸",
    "snake": "蛇", "goose": "鹅", "killer whale": "虎鲸", "teacher": "教师",
    "student": "学生", "doctor": "医生", "nurse": "护士", "driver": "司机",
    "farmer": "农民", "singer": "歌唱家", "writer": "作家", "actor": "男演员",
    "actress": "女演员", "artist": "画家", "cleaner": "清洁工", "tv reporter": "电视台记者",
    "baseball player": "棒球运动员", "engineer": "工程师", "accountant": "会计",
    "assistant": "售货员", "policeman": "警察", // 简化
    "police": "警察", "salesperson": "销售员", "rice": "米饭", "egg": "蛋",
    "hamburger": "汉堡包", "bread": "面包", "fish": "鱼", "french fries": "炸薯条",
    "beef": "牛肉", "tofu": "豆腐", "cookie": "曲奇", "milk": "牛奶", "cake": "蛋糕",
    "biscuit": "饼干", "water": "水", "hot dog": "热狗", "jam": "果酱", "salad": "沙拉",
    "coffee": "咖啡", "noodles": "面条", "soup": "汤", "breakfast": "早餐", "meat": "肉",
    "ice": "冰", "lunch": "午餐", "chicken": "鸡肉", "ice-cream": "冰淇淋",
    "dinner/supper": "晚餐", "pork": "猪肉", "coke": "可乐", "mutton": "羊肉",
    "juice": "果汁", "meal": "一餐", "vegetable": "蔬菜", "tea": "茶", "apple": "苹果",
    "grape": "葡萄", "strawberry": "草莓", "banana": "香蕉", "eggplant": "茄子",
    "cucumber": "黄瓜", "pear": "梨", "green beans": "青豆", "onion": "洋葱",
    "orange": "橙", "tomato": "西红柿", "carrot": "胡萝卜", "watermelon": "西瓜",
    "potato": "土豆", "cabbage": "卷心菜", "peach": "桃", "bike": "自行车",
    "yacht": "快艇", "plane/airplane": "飞机", "bus": "公共汽车", "car": "小汽车",
    "subway/underground": "地铁", "train": "火车", "taxi": "出租车", "boat": "小船",
    "jeep": "吉普车", "ship": "轮船", "van": "小货车；面包车", "window": "窗户",
    "picture": "图画；照片", "present": "礼物", "door": "门", "wall": "墙壁",
    "walkman": "随身听", "desk": "课桌", "floor": "地板", "lamp": "台灯", "chair": "椅子",
    "curtain": "窗帘", "phone": "电话", "bed": "床", "trash bin": "垃圾箱", "sofa": "沙发",
    "computer": "计算机", "closet": "壁橱", "shelf": "书架", "board": "写字板",
    "mirror": "镜子", "fridge": "冰箱", "fan": "风扇", "end table": "床头柜",
    "table": "桌子", "light": "灯", "football/soccer": "足球", "tv": "电视",
    "teacher's desk": "讲台", "air conditioner": "空调", "key": "钥匙", "doll": "洋娃娃",
    "hole": "洞", "lock": "锁", "ball": "球", "tube": "管子", "photo": "照片",
    "balloon": "气球", "toothbrush": "牙刷", "chart": "图表", "kite": "风筝",
    "menu": "菜单", "plate": "盘子", "jigsaw puzzle": "拼图游戏", "e-card": "电子卡片",
    "knife": "刀", "box": "盒子", "e-mail": "电子邮件", "fork": "叉", "umbrella": "伞",
    "traffic light": "交通灯", "spoon": "勺子", "zipper": "拉链", "chopsticks": "筷子",
    "violin": "小提琴", "money": "钱", "pot": "锅", "yo-yo": "溜溜球", "medicine": "药",
    "gift": "礼物", "nest": "鸟窝", "toy": "玩具", "home": "家", "garden": "花园",
    "fruit stand": "水果摊", "room": "房间", "study": "书房", "pet shop": "宠物商店",
    "bedroom": "卧室", "playground": "操场", "nature park": "自然公园",
    "bathroom": "卫生间", "canteen": "食堂", "theme park": "主题公园",
    "living room": "起居室", "teacher's office": "教师办公室", // Corrected
    "kitchen": "厨房", "library": "图书馆", "science museum": "科学博物馆",
    "classroom": "教室", "gym": "体育馆", "the great wall": "长城", "school": "学校",
    "washroom": "卫生间", "supermarket": "超市", "park": "公园", "art room": "绘画教室",
    "bank": "银行", "post office": "邮局", // Corrected
    "computer room": "计算机教室", "country": "国家", "police office": "警察局", // Corrected
    "music room": "音乐教室", "village": "乡村", "hospital": "医院", "tv room": "电视机房",
    "city": "城市", "cinema": "电影院", "flat": "公寓", "hometown": "家乡",
    "bookstore": "书店", "company": "公司", "bus stop": "公交车站", "farm": "农场",
    "factory": "工厂", "zoo": "动物园", // Corrected
    "big": "大的", "tired": "疲劳的", "fat": "胖的", "small": "小的",
    "excited": "兴奋的", "right": "对的", "long": "长的", "angry": "生气的",
    "hungry": "饥饿的", "tall": "高的", // Corrected
    "happy": "高兴的", "cute": "逗人喜爱的", "short": "短的；矮的", "bored": "无聊的",
    "little": "小的", // Corrected
    "young": "年轻的", "sad": "忧愁的", "lovely": "可爱的", // Corrected
    "old": "旧的；老的", // Corrected
    "taller": "更高的", // Removed comparative for matching game
    "beautiful": "漂亮的", "strong": "健壮的", "shorter": "更矮的",
    "colourful": "色彩鲜艳的", "thin": "瘦的", "stronger": "更强壮的",
    "pretty": "漂亮的", "active": "积极活跃的", "older": "年龄更大的", // Corrected
    "cheap": "便宜的", "quiet": "安静的", "younger": "更年轻的", "expensive": "昂贵的",
    "nice": "好看的", "bigger": "更大的", "juicy": "多汁的", // Corrected
    "kind": "和蔼亲切的", "heavier": "更重的", "tender": "嫩的", "strict": "严格的",
    "longer": "更长的", "healthy": "健康的", "smart": "聪明的", "thinner": "更瘦的",
    "ill": "有病的", "funny": "滑稽可笑的", "smaller": "更小的", // Corrected
    "helpful": "有帮助的", "tasty": "好吃的", "good": "好的", "high": "高的",
    "sweet": "甜的", "fine": "好的", "easy": "简单的", "salty": "咸的",
    "great": "很好的", "proud": "骄傲的", "sour": "酸的", "heavy": "重的",
    "sick": "有病的", "fresh": "新鲜的", "new": "新的", "better": "更好的",
    "favourite": "最喜爱的", "clean": "干净的", "higher": "更高的",
    "sports": "体育运动", "science": "科学", "moral education": "思想品德课",
    "social studies": "社会课", "chinese": "语文", "math": "数学", "pe": "体育课",
    "english": "英语", "america": "美国", // Corrected
    "uk": "联合王国（United Kingdom）", "england": "英国", "canada": "加拿大", // Corrected
    "australia": "澳大利亚", "new york": "纽约", "london": "伦敦", "sydney": "悉尼",
    "moscow": "莫斯科", "cairo": "开罗", // Corrected
    "cold": "寒冷的", "warm": "温暖的", "cool": "凉爽的", "snowy": "下雪的",
    "sunny": "晴朗的", "hot": "炎热的", "rainy": "下雨的", "windy": "有风的",
    "cloudy": "多云的", "weather report": "天气预报", "river": "河流", "house": "房子",
    "mountain": "山", "lake": "湖泊", "bridge": "桥", "sky": "天空", "stream": "河；溪",
    "building": "建筑物", // Corrected
    "rainbow": "彩虹", "forest": "森林", "rain": "雨", "wind": "风", "path": "小道",
    "cloud": "云", // Corrected
    "air": "空气", "road": "公路", "sun": "太阳", "moon": "月亮", "flower": "花",
    "grass": "草", "tree": "树", "seed": "种子", "sprout": "苗", "plant": "植物",
    "rose": "玫瑰", "leaf": "叶子", "monday": "星期一", "tuesday": "星期二",
    "wednesday": "星期三", "thursday": "星期四", "friday": "星期五", "saturday": "星期六",
    "sunday": "星期天", "weekend": "周末", "january": "一月", "february": "二月",
    "march": "三月", "april": "四月", "may": "五月", "june": "六月", "july": "七月",
    "august": "八月", "september": "九月", "october": "十月", "november": "十一月",
    "december": "十二月", "spring": "春", "summer": "夏", "fall/autumn": "秋",
    "winter": "冬", "south": "南", "north": "北", "east": "东", "west": "西",
    "left": "左边", "right": "右边", "up": "上", "down": "下", "have a fever": "发烧",
    "have a toothache": "牙疼", "hurt": "疼痛", "have a headache": "头疼",
    "have a cold": "感冒", "have a sore throat": "喉咙疼",
    "water the flowers": "浇花", // 从 fIWers 修正
    "sweep the floor": "扫地", // 从 fIr 修正
    "clean the bedroom": "打扫卧室", // 修正
    "make the bed": "铺床",
    "set the table": "摆饭桌",
    "wash the clothes": "洗衣服",
    "do the dishes": "洗碗碟",
    "use a computer": "使用计算机",
    "do morning exercises": "晨练；做广播操",
    "eat breakfast": "吃早饭",
    "eat dinner": "吃晚饭",
    "go to school": "上学",
    "have english class": "上英语课",
    "play sports": "进行体育运动",
    "get up": "起床", // 从 get (got) up 修正
    "climb mountains": "爬山",
    "go shopping": "买东西",
    "play the piano": "弹钢琴",
    "visit grandparents": "看望(外)祖父母",
    "go hiking": "去远足",
    "fly kites": "放风筝", // 从 fIy 修正
    "make a snowman": "堆雪人",
    "plant trees": "种树",
    "draw pictures": "画画", // 从 drawdrew 修正
    "cook dinner": "做饭",
    "read a book": "看书", // 从 read book 修正
    "answer the phone": "接电话",
    "listen to music": "听音乐",
    "clean the room": "打扫房间",
    "write a letter": "写信",
    "write an e-mail": "写电子邮件",
    "drink water": "喝水",
    "take pictures": "照相",
    "watch insects": "观察昆虫",
    "pick up leaves": "采摘树叶", // 从 pickup 修正
    "do an experiment": "做实验",
    "catch butterflies": "捉蝴蝶", // 从 butterflies 修正
    "count insects": "数昆虫",
    "collect insects": "收集昆虫",
    "collect leaves": "收集树叶",
    "write a report": "写报告",
    "have a picnic": "举行野餐",
    "get to": "到达",
    "ride a bike": "骑自行车",
    "play the violin": "拉小提琴",
    "make kites": "制作风筝",
    "collect stamps": "集邮",
    "meet": "见面", // 从 meet(met) 修正
    "guess": "猜",
    "help": "帮助", // 添加动词 help (之前可能有形容词 helpful)
    "pass": "传递",
    "show": "展示",
    "kick": "踢",
    "bounce": "反弹",
    "ride": "骑",
    "fall": "落下", // 从 faIIofe 修正
    "leave": "离开", // 从 leaveIeft 修正
    "wake up": "醒来",
    "put on": "穿上",
    "take off": "脱掉",
    "hang up": "挂起", // 从 hang Up 修正
    "wear": "穿",
    "go home": "回家",
    "go to bed": "上床睡觉",
    "play computer games": "玩电脑游戏",
    "empty the trash": "倒垃圾",
    "put away the clothes": "收拾衣服",
    "get off": "下车",
    "take a trip": "去旅行",
    "read a magazine": "阅读杂志",
    "go to the cinema": "去看电影",
    "go straight": "向前直走",
    // --- 开始添加新单词 (根据新列表) ---
    // --- 开始添加新单词 (根据新列表) ---
    "feeling": "感觉；感触",
    "fever": "发烧",
    "fiction": "小说",
    "finger": "手指",
    "fit": "适合；合身",
    "fix": "修理；安装",
    "fix up": "修理；装饰",
    "flashlight": "手电筒",
    "foot": "脚；足",
    "force": "力；力量",
    "forever": "永远",
    "freezing": "极冷的；冰冻的",
    "french": "法语", // 简化
    "full of": "满是……的；（有）大量的；(有)丰富的",
    "german": "德国的；德语的；德国人的 / 德语；德国人",
    "get into": "陷入；参与",
    "get married": "结婚",
    "get on with": "和……相处",
    "get out of": "离开；从……出来",
    "give away": "赠送；捐赠",
    "give out": "分发；散发",
    "give up": "放弃",
    "go off": "(闹钟)发出响声",
    "god": "上帝；神",
    "gold": "金子 / 金色的",
    "government": "政府；内阁",
    "ground": "地面；土地",
    "gun": "枪；炮",
    "hand out": "分发",
    "hate": "厌恶；讨厌",
    "have a look": "看一看",
    "have a stomachache": "胃痛",
    "headache": "头痛",
    "heavily": "在很大程度上；大量地",
    "herself": "她自己",
    "hide": "隐藏；隐蔽",
    "hit": "(用手或器具)击；打",
    "hold": "拥有；抓住",
    "honest": "诚实的；老实的",
    "huge": "巨大的；极多的",
    "hurry": "匆忙；赶快",
    "hurry up": "赶快；急忙（做某事)",
    "husband": "丈夫",
    "journey": "(尤指长途)旅行；行程",
    "joy": "高兴；愉快",
    "icy": "覆盖着冰的；冰冷的",
    "illness": "疾病；病",
    "imagine": "想象；设想",
    "importance": "重要性；重要",
    "in one's opinion": "依……看",
    "in order to": "目的是；为了",
    "in silence": "沉默；无声",
    "in the face of": "面对（问题、困难等）",
    "include": "包括；包含",
    "independence": "独立",
    "independent": "独立的；自主的",
    "indian": "印度的 / 印度人",
    "instead": "代替；反而；却",
    "instead of": "代替；而不是",
    "interest": "兴趣；关注 / 使感兴趣；使关注",
    "introduce": "介绍；引见",
    "invent": "发明；创造",
    "invention": "发明；发明物",
    "island": "岛屿",
    "itself": "它自己",
    "japanese": "日本的；日本人的；日语的 / 日本人；日语",
    "junior": "地位（或职位、级别）低下的",
    "junior high school": "初级中学",
    "keeper": "饲养员；保管人",
    "kilo": "千克；公斤", // 简化
    "kindness": "仁慈；好意",
    "knee": "膝；膝盖",
    "land": "陆地；土地",
    "laughter": "笑；笑声",
    "lead": "带领；引导",
    "letter": "信；字母", // 添加名词含义
    "lend": "借给；借出",
    "lie": "躺；平躺",
    "lie down": "躺下",
    "line": "行；排 / 线条",
    "location": "地点；位置",
    "lonely": "孤独的；寂寞的",
    "look through": "快速查看；浏览",
    "madam": "夫人；女士",
    "magic": "有魔力的；有神奇力量的",
    "make a difference": "影响；有作用",
    "make one's way": "前往；费力地前进",
    "maker": "生产者；制订者",
    "man-made": "人造的",
    "mark": "迹象；记号；分数 / 做记号；打分",
    "marry": "结婚",
    "match": "比赛；火柴 / 匹配",
    "matter": "问题；事情",
    "mean": "意思是；打算；意欲",
    "member": "成员；分子",
    "memory": "记忆；回忆",
    "mess": "杂乱；不整洁",
    "meter": "米；公尺", // 简化
    "midnight": "午夜；子夜",
    "million": "百万",
    "modern": "现代的；当代的",
    "moonlight": "月光",
    "mostly": "主要地；通常",
    "nature": "自然界；大自然", // 添加名词含义
    "neck": "颈；脖子",
    "neither": "也不 / 两者都不",
    "nervous": "焦虑的；担忧的",
    "no longer": "不再；不复",
    "nobody": "没有人 / 小人物",
    "nosebleed": "鼻出血",
    "notice": "通知；通告；注意 / 注意到；意识到",
    "nowadays": "现今；现在；目前",
    "object": "物体；物品",
    "ocean": "大海；海洋",
    "off": "离开（某处）；不工作；从……去掉", // 添加介词/副词含义
    "offer": "主动提出；自愿给予",
    "oil": "油；食用油；石油",
    "on the one hand... on the other hand ...": "一方面……另一方面……",
    "once upon a time": "从前",
    "one another": "互相",
    "onto": "到……上",
    "opinion": "意见；想法；看法",
    "opposite": "与……相对；在……对面 / 对面的；另一边的",
    "or so": "大约",
    "ourselves": "我们自己",
    "owner": "物主；主人",
    "page": "页，面，张",
    "part with": "放弃、交出（尤指不舍得的东西)",
    "passage": "章节；段落",
    "passenger": "乘客；旅客",
    "peaceful": "和平的；安宁的",
    "perfect": "完美的；完全的",
    "performance": "表演；演出",
    "perhaps": "可能；大概；也许",
    "pick up": "接电话；捡起", // 简化
    "pop": "流行音乐；流行乐曲",
    "population": "人口；人口数量",
    "press": "压；挤；按",
    "pressure": "压力",
    "prince": "王子",
    "progress": "进步；进展",
    "proper": "正确的；恰当的",
    "protect": "保护；防护",
    "protection": "保护",
    "province": "省份",
    "provide": "提供；供给",
    "pupil": "学生",
    "push": "鞭策；督促；推动 / 推",
    "put off": "推迟",
    "quick": "快的；迅速的；时间短暂的",
    "railway": "铁路；铁道",
    "rainstorm": "暴风雨",
    "raise": "募集；征集 / 举起；提高",
    "rapid": "迅速的；快速的",
    "realize": "理解；领会；认识到",
    "recently": "不久前；最近",
    "record": "唱片；记录 / 录制；录（音）",
    "regard": "将……认为；把……视为；看待",
    "relation": "关系；联系；交往",
    "remind": "提醒；使想起",
    "repair": "修理；修补",
    "report": "报道；公布", // 添加名词/动词含义
    "research": "研究；调查",
    "rest": "放松；休息",
    "return": "归还；回来；返回",
    "right away": "立即；马上",
    "rise": "升起；增加；提高",
    "risk": "危险；风险；冒险",
    "rock": "岩石 / 摇滚乐",
    "rubbish": "垃圾；废弃物",
    "run out (of)": "用尽；耗尽",
    "safe": "安全的；无危险的",
    "sand": "沙；沙滩",
    "satisfaction": "满足；满意",
    "scene": "(戏剧或歌剧的)场；场景 / 景色",
    "science fiction": "科幻小说（或影片等）",
    "search": "搜索；搜查",
    "secondly": "第二；其次",
    "set up": "建起；设立",
    "several": "几个；数个；一些",
    "shame": "羞耻；羞愧；惭愧",
    "shocked": "惊愕的；受震惊的",
    "shoot": "射击；发射 / 拍摄",
    "sign": "标志；信号 / 签名",
    "silence": "沉默；寂静；无声", // 添加名词含义
    "silk": "丝绸；丝织物",
    "silly": "蠢的；不明事理的",
    "simply": "仅仅；只；不过",
    "since": "因为；既然 / 从……以后；自……以来",
    "sir": "先生",
    "situation": "情况；状况；形势",
    "skill": "技艺；技巧",
    "smile": "笑；微笑",
    "snack": "点心；小吃；快餐",
    "social": "社会的", // 添加形容词含义
    "soft": "软的；柔软的",
    "soft toy": "软体玩具；布绒玩具",
    "somewhere": "在某处；到某处",
    "sore": "疼痛的；酸痛的", // 添加形容词含义
    "southern": "南方的；南部的",
    "southwestern": "西南的；西南方向的",
    "spirit": "勇气；意志 / 精神；灵魂",
    "square": "平方；正方形 / 广场",
    "stepmother": "继母",
    "stepsister": "继姐妹",
    "stick": "棍；条 / 粘贴",
    "stomach": "胃；腹部",
    "stomachache": "胃痛；腹痛", // 添加名词含义
    "stone": "石头",
    "storm": "暴风雨",
    "strange": "陌生的；奇怪的",
    "stress": "精神压力；心理负担",
    "stupid": "愚蠢的",
    "succeed": "实现目标；成功",
    "success": "成功", // 添加名词含义
    "suddenly": "突然；忽然",
    "sunburned": "晒伤的",
    "tail": "尾巴",
    "take after": "(外貌、行为)像",
    "take breaks": "休息一下", // 简化
    "take care of": "照顾；处理",
    "take down": "拆除；往下拽；记录",
    "take in": "吸入；吞入（体内) / 理解；欺骗",
    "take one's temperature": "量体温",
    "take out the rubbish": "倒垃圾",
    "take risks": "冒险", // 简化
    "tea art": "茶艺",
    "tea set": "茶具",
    "technology": "科技；工艺",
    "terrorist": "恐怖主义者；恐怖分子",
    "the pacific ocean": "太平洋",
    "theme": "主题", // 添加名词含义
    "thick": "厚的；浓的",
    "thousand": "千",
    "thousands of": "数以千计的；许许多多的",
    "throat": "咽喉；喉咙", // 添加名词含义
    "throw": "扔；掷",
    "to be honest": "说实在的",
    "to one's surprise": "使……惊奇的是；出乎……的意料",
    "toilet": "坐便器；厕所",
    "tool": "工具",
    "toothache": "牙痛", // 添加名词含义
    "tour": "旅行；旅游",
    "towards": "朝；向；对着",
    "tower": "塔；塔楼",
    "training": "训练；培训",
    "treasure": "财富；珍宝",
    "trouble": "麻烦；困难；烦恼",
    "truth": "真相；事实",
    "truthful": "诚实的；真实的",
    "try out": "参加……选拔；试用",
    "turn... into": "(使)变成",
    "typical": "典型的；有代表性的",
    "unbelievable": "难以置信的；不真实的",
    "understand": "理解；领会",
    "underwear": "内衣",
    "unfair": "不合理的；不公正的",
    "unusual": "特别的；不寻常的",
    "up to": "到达（某数量、程度等）；至多有；不多于 / 忙于；打算做",
    "used to": "曾经……；过去……",
    "usual": "通常的；寻常的",
    "voice": "嗓音；声音",
    "volunteer": "义务做；自愿做 / 志愿者",
    "walk into": "走进；不小心撞上",
    "waste": "浪费；废料； / 浪费；滥用",
    "weak": "虚弱的；无力的",
    "weigh": "重量是……；称……的重量",
    "western": "西方国家的；（尤指）欧美的；西方的",
    "whale": "鲸", // 添加名词含义
    "what's the matter?": "怎么了？出什么事了？",
    "what's wrong?": "哪儿不舒服？怎么了？",
    "whatever": "任何；每一 / 无论什么",
    "wheel": "车轮；轮子",
    "whenever": "在任何……的时候；无论何时",
    "whether": "不管(还是)；或者……（或者）；是否",
    "while": "与…同时；当……的时候；而；然而 / 一段时间；一会儿",
    "whole": "全部的；整体的",
    "wide": "宽的；宽阔的",
    "wife": "妻子；太太",
    "wild": "野生的；未开发的 / 疯狂的",
    "wood": "木；木头",
    "work out": "成功地发展；解决 / 锻炼身体",
    "wrong": "有毛病；错误的", // 添加形容词含义
    "x-ray": "X射线；X光",
    "yard": "院子",
    "yard sale": "庭院拍卖会",
    "central park": "中央公园",
    "huangguoshu waterfall": "黄果树瀑布",
    "hong kong": "香港",
    "malaysia": "马来西亚",
    "malaysian": "马来西亚的 / 马来西亚人",
    "georgetown": "乔治市",
    "weld quay": "海墘街",
    "penang hill": "槟城山",
    "tiananmen square": "天安门广场",
    "the palace museum": "故宫博物院",
    "hardly": "几乎不; 几乎没有",
    "ever": "在任何时候; 从来; 曾经",
    "hardly ever": "几乎从不",
    "once": "一次; 曾经",
    "twice": "两次; 两倍",
    "internet": "(国际)互联网; 因特网",
    "program": "节目；程序", // programme 也是一样
    "full": "忙的; 满的; 充满的", // 添加形容词含义
    "swing dance": "摇摆舞",
    "maybe": "大概; 或许; 可能",
    "least": "最小; 最少 / 最小的; 最少的",
    "at least": "至少; 不少于; 起码",
    "junk": "无用的东西; 无价值的东西",
    "junk food": "垃圾食品",
    "health": "健康; 人的身体(或精神)状态", // 添加名词含义
    "result": "结果; 后果",
    "percent": "百分之……",
    "online": "在线(的); 联网(的)",
    "television": "电视节目; 电视机",
    "although": "虽然; 尽管; 即使",
    "through": "以; 凭借; 穿过",
    "mind": "头脑; 心智 / 介意", // 添加名词/动词含义
    "body": "身体",
    "such": "这样的; 那样的; 类似的",
    "such as": "例如; 像……这样",
    "together": "在一起; 共同",
    "die": "消失; 灭亡; 死亡",
    "dentist": "牙科医生",
    "however": "然而; 不过",
    "than": "(用以引出比较的第二部分)比",
    "more than": "多于",
    "almost": "几乎; 差不多",
    "none": "没有一个; 毫无",
    "less": "较少; 较小 / 较少的; 更少的",
    "less than": "少于",
    "point": "得分; 点 / 指; 指向",
    "quietly": "轻声地; 轻柔地; 安静地",
    "hard-working": "工作努力的; 辛勤的",
    "competition": "比赛; 竞赛; 竞争",
    "fantastic": "极好的; 了不起的",
    "which": "哪一个; 哪一些",
    "clearly": "清楚地; 清晰地; 明白地",
    "win": "获胜; 赢; 赢得",
    "though": "不过; 可是; 然而 / 虽然; 尽管; 不过",
    "talented": "有才能的; 有才干的",
    "truly": "真正; 确实",
    "care": "在意; 担忧; 关心 / 关心；照顾",
    "care about": "关心; 在意",
    "laugh": "笑; 发笑 / 笑声",
    "serious": "严肃的; 稳重的 / 严重的",
    "as long as": "只要; 既然",
    "necessary": "必需的; 必要的",
    "be different from": "与……不同; 与……有差异",
    "bring out": "使显现; 使表现出",
    "outgoing": "爱交际的; 友好的; 外向的",
    "both": "两个; 两个都",
    "loudly": "喧闹地; 大声地; 响亮地",
    "grade": "成绩等级; 评分等级 / 年级",
    "should": "应该; 应当; 可以",
    "the same as": "和……相同; 与……一致",
    "saying": "谚语; 格言; 警句",
    "reach": "伸手; 到达; 抵达",
    "hand": "手 / 传递", // 添加动词含义
    "touch": "感动; 触摸",
    "heart": "内心; 心脏",
    "fact": "现实; 事实",
    "in fact": "确切地说; 事实上; 实际上",
    "break": "(使)破; 裂; 碎; 损坏",
    "arm": "手臂; 上肢",
    "share": "分享; 共享; 共用; 分摊",
    "loud": "响亮的; 大声的",
    "similar": "相像的; 类似的",
    "be similar to": "与……相像的、类似的",
    "primary": "最初的; 最早的",
    "primary school": "小学",
    "information": "信息; 消息",
    "comfortable": "使人舒服的; 舒适的",
    "seat": "座位; 坐处(如椅子等)",
    "screen": "银幕; 屏幕",
    "ticket": "票; 入场券",
    "worst": "最差(的); 最坏(的); 最糟(的)",
    "cheaply": "便宜地; 低廉地",
    "song": "歌; 歌曲",
    "dj": "(电台、电视台、俱乐部的)音乐节目主持人",
    "choose": "选择; 挑选",
    "carefully": "细致地; 小心地; 谨慎地", // 添加副词
    "so far": "到目前为止; 迄今为止",
    "comfortably": "舒服地; 舒适地",
    "worse": "更差(的); 更坏(的); 更糟(的)",
    "service": "接待; 服务",
    "act": "扮演 / 表演者；行为", // 添加名词/动词
    "creative": "有创造力的; 创造性的",
    "performer": "表演者; 演员",
    "talent": "天资; 天赋", // 添加名词
    "have...in common": "有相同特征; (想法、兴趣等方面)相同",
    "magician": "魔术师",
    "all kinds of": "各种类型的; 各种各样的",
    "beautifully": "美好地; 漂亮地",
    "be up to": "是……的职责; 由……决定",
    "role": "作用; 职能; 角色", // 添加名词
    "play a role": "发挥作用; 有影响",
    "winner": "获胜者; 优胜者",
    "prize": "奖; 奖品; 奖金",
    "everybody": "每人; 人人; 所有人",
    "make up": "编造(故事、谎言等) / 化妆；组成",
    "example": "实例; 范例",
    "for example": "例如",
    "poor": "贫穷的; 清贫的 / 可怜的",
    "seriously": "严重地; 严肃地; 认真地",
    "take...seriously": "认真对待……",
    "give": "提供; 给", // 添加动词
    "crowded": "人多的; 拥挤的; 挤满的",
    "joke": "笑话; 玩笑",
    "sitcom": "情景喜剧",
    "news": "新闻节目; 新闻",
    "soap opera": "肥皂剧",
    "stand": "忍受; 站立",
    "educational": "教育的; 有教育意义的",
    "plan": "打算; 计划", // 添加名词/动词
    "hope": "希望",
    "find out": "查明; 弄清",
    "discussion": "讨论; 商量",
    "happen": "发生; 出现",
    "expect": "预料; 期待",
    "comedy": "喜剧; 喜剧片",
    "meaningless": "毫无意义的; 意思不明确的",
    "action": "行动",
    "action movie": "动作影片",
    "cartoon": "动画片; 卡通片",
    "appear": "出现",
    "rich": "富有的",
    "might": "可能; 可以",
    "main": "主要的; 最重要的",
    "reason": "原因; 理由",
    "common": "普通的; 常见的", // 添加形容词
    "film": "电影", // movie
    "unlucky": "不幸的; 不吉利的",
    "lose": "失去; 丢失",
    "girlfriend": "女朋友",
    "ready": "愿意的; 准备好的",
    "be ready to": "准备好(做某事); 愿意(做某事)",
    "simple": "简单的; 易做的", // 添加形容词
    "dress up": "装扮; 乔装打扮",
    "take sb.'s place": "代替某人",
    "army": "陆军; 陆军部队",
    "do a good job": "干得好",
    "grow up": "长大; 成熟; 成长",
    "computer programmer": "计算机程序设计员; 编程人员",
    "violinist": "小提琴手",
    "pilot": "飞行员",
    "pianist": "钢琴家",
    "scientist": "科学家", // 添加名词
    "be sure about": "确信; 对……有把握",
    "make sure": "确保; 查明",
    "college": "学院; 大学; 高等专科学校",
    "education": "教育", // 添加名词
    "university": "(综合性)大学; 高等学府", // 添加名词
    "article": "文章; 论文",
    "resolution": "决心; 决定",
    "team": "队; 组",
    "make the soccer team": "成为足球队的一员",
    "foreign": "外国的",
    "able": "能够",
    "be able to": "能够做某事",
    "question": "表示疑问; 怀疑; 提问; 质询 / 问题",
    "meaning": "意义; 意思", // 添加名词
    "discuss": "讨论; 商量",
    "promise": "承诺; 诺言 / 许诺; 承诺",
    "beginning": "开头; 开端",
    "at the beginning of": "在……开始",
    "improve": "改进; 改善",
    "write down": "写下; 记录下",
    "physical": "身体的",
    "themselves": "他(她、它)们自己",
    "have to do with": "关于; 与……有关系",
    "self-improvement": "自我改进; 自我提高",
    "take up": "(尤指为消遣)学着做; 开始做",
    "hobby": "业余爱好",
    "weekly": "每周的(地)",
    "schoolwork": "学校作业; 功课",
    "personal": "个人的; 私人的",
    "relationship": "关系; 联系",
    "the old man and the sea": "《老人与海》",
    "paper": "纸; 纸张 / 报纸；论文",
    "pollution": "污染; 污染物",
    "prediction": "预言; 预测",
    "future": "将来; 未来",
    "pollute": "污染",
    "environment": "环境",
    "planet": "行星",
    "earth": "地球; 世界 / 泥土",
    "play a part": "参与; 发挥作用",
    "peace": "和平",
    "sea": "海; 海洋", // 添加名词
    "build": "建筑; 建造",
    "astronaut": "宇航员; 航天员",
    "apartment": "公寓套房",
    "rocket": "火箭",
    "space": "太空; 空间",
    "space station": "太空站; 宇宙空间站",
    "human": "人的 / 人",
    "servant": "仆人",
    "dangerous": "有危险的; 不安全的",
    "already": "已经; 早已",
    "over and over again": "多次; 反复地",
    "japan": "日本",
    "believe": "相信; 认为有可能",
    "disagree": "不同意; 持不同意见; 有分歧",
    "even": "甚至; 连; 愈加",
    "agree": "同意; 赞成; 应允",
    "hundreds of": "许多; 大量",
    "shape": "形状; 外形 / 塑造",
    "fall down": "突然倒下; 跌倒; 倒塌",
    "inside": "在……里面",
    "look for": "寻找; 寻求",
    "possible": "可能存在或发生的; 可能的",
    "impossible": "不可能存在或发生的; 不可能的",
    "side": "一方(的意见、态度、立场) / 边；旁边",
    "probably": "很可能; 大概",
    "during": "在……期间",
    "holiday": "假期; 假日",
    "word": "单词; 词 / 话语",
    "shake": "摇动; 抖动",
    "milkshake": "奶昔",
    "blender": "食物搅拌器",
    "turn on": "接通(电流、煤气、水等); 打开",
    "peel": "剥皮; 去皮 / 皮",
    "pour": "倒出; 倾倒",
    "yogurt": "酸奶", // yoghurt
    "honey": "蜂蜜",
    "add": "增加; 添加",
    "finally": "最后; 最终",
    "salt": "食盐", // 添加名词
    "sugar": "食糖",
    "cheese": "干酪; 奶酪",
    "popcorn": "爆米花",
    "corn": "玉米; 谷物",
    "dig": "掘(地); 凿(洞); 挖(土)",
    "sandwich": "夹心面包片; 三明治",
    "butter": "黄油; 奶油",
    "lettuce": "莴苣; 生菜",
    "piece": "片; 块; 段",
    "thanksgiving": "感恩节",
    "traditional": "传统的; 惯例的",
    "traveler": "漂泊者; 旅行者; 游客",
    "celebrate": "庆祝; 庆贺",
    "mix": "(使)混合; 融合", // 添加动词
    "pepper": "胡椒粉; 柿子椒",
    "fill": "(使)充满; 装满",
    "oven": "烤箱; 烤炉",
    "cover": "遮盖; 覆盖 / 覆盖物; 盖子 / 封面",
    "gravy": "(调味)肉汁",
    "serve": "接待; 服务; 提供",
    "temperature": "温度; 气温; 体温", // 添加名词
    "prepare for": "为……做准备",
    "go to the doctor": "去看医生",
    "flu": "流行性感冒; 流感",
    "available": "有空的; 可获得的",
    "another time": "其他时间; 别的时间",
    "until": "到……时; 直到……为止",
    "hang": "悬挂; 垂下", // 添加动词
    "hang out": "闲逛; 常去某处",
    "catch": "及时赶上; 接住; 抓住 / 患上（疾病）", // 添加动词
    "accept": "接受",
    "refuse": "拒绝",
    "the day before yesterday": "前天",
    "the day after tomorrow": "后天",
    "weekday": "工作日",
    "look after": "照顾",
    "invitation": "邀请; 请柬",
    "turn down": "拒绝 / 调小音量",
    "reply": "回答; 答复",
    "forward": "转寄; 发送 / 向前; 前进",
    "delete": "删除",
    "print": "打印; 印刷",
    "goodbye": "再见",
    "glad": "高兴; 愿意",
    "help out": "(帮助……)分担工作、解决难题",
    "preparation": "准备; 准备工作",
    "glue": "胶水 / 粘贴",
    "without": "没有; 不(做某事)",
    "surprised": "惊奇的; 感觉意外的",
    "look forward to": "盼望; 期待",
    "hear from": "接到(某人的)信、电话等",
    "housewarming": "乔迁聚会",
    "opening": "开幕式; 落成典礼 / 开口；空缺",
    "concert": "音乐会; 演奏会",
    "headmaster": "校长",
    "daytime": "白天; 日间",
    "potato chips": "炸土豆片; 炸薯条",
    "upset": "难过; 失望; 沮丧 / 打乱",
    "agent": "代理人; 经纪人",
    "keep...to oneself": "保守秘密",
    "unless": "除非; 如果不",
    "certainly": "无疑; 肯定; 当然; 行",
    "wallet": "钱包",
    "mile": "英里",
    "understanding": "善解人意的; 体谅人的 / 理解；谅解",
    "careless": "粗心的; 不小心的",
    "mistake": "错误; 失误",
    "himself": "他自己",
    "careful": "小心的; 细致的; 精心的; 慎重的", // 添加形容词
    "advise": "劝告; 建议",
    "solve": "解决; 解答",
    "step": "步; 步骤 / 走；踏",
    "trust": "相信; 信任",
    "experience": "经验; 经历 / 体验；经历",
    "in half": "分成两半",
    "halfway": "在中途; 部分地做(或达到)",
    "else": "别的; 其他的",
    // --- 开始添加新单词 (根据新列表) ---
    "feeling": "感觉；感触",
    "fever": "发烧",
    "fiction": "小说",
    "finger": "手指",
    "fit": "适合；合身",
    "fix": "修理；安装",
    "fix up": "修理；装饰",
    "flashlight": "手电筒",
    "foot": "脚；足",
    "force": "力；力量",
    "forever": "永远",
    "freezing": "极冷的；冰冻的",
    "french": "法语", // 简化
    "full of": "满是……的；（有）大量的；(有)丰富的",
    "german": "德国的；德语的；德国人的 / 德语；德国人",
    "get into": "陷入；参与",
    "get married": "结婚",
    "get on with": "和……相处",
    "get out of": "离开；从……出来",
    "give away": "赠送；捐赠",
    "give out": "分发；散发",
    "give up": "放弃",
    "go off": "(闹钟)发出响声",
    "god": "上帝；神",
    "gold": "金子 / 金色的",
    "government": "政府；内阁",
    "ground": "地面；土地",
    "gun": "枪；炮",
    "hand out": "分发",
    "hate": "厌恶；讨厌",
    "have a look": "看一看",
    "have a stomachache": "胃痛",
    "headache": "头痛",
    "heavily": "在很大程度上；大量地",
    "herself": "她自己",
    "hide": "隐藏；隐蔽",
    "hit": "(用手或器具)击；打",
    "hold": "拥有；抓住",
    "honest": "诚实的；老实的",
    "huge": "巨大的；极多的",
    "hurry": "匆忙；赶快",
    "hurry up": "赶快；急忙（做某事)",
    "husband": "丈夫",
    "journey": "(尤指长途)旅行；行程",
    "joy": "高兴；愉快",
    "icy": "覆盖着冰的；冰冷的",
    "illness": "疾病；病",
    "imagine": "想象；设想",
    "importance": "重要性；重要",
    "in one's opinion": "依……看",
    "in order to": "目的是；为了",
    "in silence": "沉默；无声",
    "in the face of": "面对（问题、困难等）",
    "include": "包括；包含",
    "independence": "独立",
    "independent": "独立的；自主的",
    "indian": "印度的 / 印度人",
    "instead": "代替；反而；却",
    "instead of": "代替；而不是",
    "interest": "兴趣；关注 / 使感兴趣；使关注",
    "introduce": "介绍；引见",
    "invent": "发明；创造",
    "invention": "发明；发明物",
    "island": "岛屿",
    "itself": "它自己",
    "japanese": "日本的；日本人的；日语的 / 日本人；日语",
    "junior": "地位（或职位、级别）低下的",
    "junior high school": "初级中学",
    "keeper": "饲养员；保管人",
    "kilo": "千克；公斤", // 简化
    "kindness": "仁慈；好意",
    "knee": "膝；膝盖",
    "land": "陆地；土地",
    "laughter": "笑；笑声",
    "lead": "带领；引导",
    "letter": "信；字母", // 添加名词含义
    "lend": "借给；借出",
    "lie": "躺；平躺",
    "lie down": "躺下",
    "line": "行；排 / 线条",
    "location": "地点；位置",
    "lonely": "孤独的；寂寞的",
    "look through": "快速查看；浏览",
    "madam": "夫人；女士",
    "magic": "有魔力的；有神奇力量的",
    "make a difference": "影响；有作用",
    "make one's way": "前往；费力地前进",
    "maker": "生产者；制订者",
    "man-made": "人造的",
    "mark": "迹象；记号；分数 / 做记号；打分",
    "marry": "结婚",
    "match": "比赛；火柴 / 匹配",
    "matter": "问题；事情",
    "mean": "意思是；打算；意欲",
    "member": "成员；分子",
    "memory": "记忆；回忆",
    "mess": "杂乱；不整洁",
    "meter": "米；公尺", // 简化
    "midnight": "午夜；子夜",
    "million": "百万",
    "modern": "现代的；当代的",
    "moonlight": "月光",
    "mostly": "主要地；通常",
    "nature": "自然界；大自然", // 添加名词含义
    "neck": "颈；脖子",
    "neither": "也不 / 两者都不",
    "nervous": "焦虑的；担忧的",
    "no longer": "不再；不复",
    "nobody": "没有人 / 小人物",
    "nosebleed": "鼻出血",
    "notice": "通知；通告；注意 / 注意到；意识到",
    "nowadays": "现今；现在；目前",
    "object": "物体；物品",
    "ocean": "大海；海洋",
    "off": "离开（某处）；不工作；从……去掉", // 添加介词/副词含义
    "offer": "主动提出；自愿给予",
    "oil": "油；食用油；石油",
    "on the one hand... on the other hand ...": "一方面……另一方面……",
    "once upon a time": "从前",
    "one another": "互相",
    "onto": "到……上",
    "opinion": "意见；想法；看法",
    "opposite": "与……相对；在……对面 / 对面的；另一边的",
    "or so": "大约",
    "ourselves": "我们自己",
    "owner": "物主；主人",
    "page": "页，面，张",
    "part with": "放弃、交出（尤指不舍得的东西)",
    "passage": "章节；段落",
    "passenger": "乘客；旅客",
    "peaceful": "和平的；安宁的",
    "perfect": "完美的；完全的",
    "performance": "表演；演出",
    "perhaps": "可能；大概；也许",
    "pick up": "接电话；捡起", // 简化
    "pop": "流行音乐；流行乐曲",
    "population": "人口；人口数量",
    "press": "压；挤；按",
    "pressure": "压力",
    "prince": "王子",
    "progress": "进步；进展",
    "proper": "正确的；恰当的",
    "protect": "保护；防护",
    "protection": "保护",
    "province": "省份",
    "provide": "提供；供给",
    "pupil": "学生",
    "push": "鞭策；督促；推动 / 推",
    "put off": "推迟",
    "quick": "快的；迅速的；时间短暂的",
    "railway": "铁路；铁道",
    "rainstorm": "暴风雨",
    "raise": "募集；征集 / 举起；提高",
    "rapid": "迅速的；快速的",
    "realize": "理解；领会；认识到",
    "recently": "不久前；最近",
    "record": "唱片；记录 / 录制；录（音）",
    "regard": "将……认为；把……视为；看待",
    "relation": "关系；联系；交往",
    "remind": "提醒；使想起",
    "repair": "修理；修补",
    "report": "报道；公布", // 添加名词/动词含义
    "research": "研究；调查",
    "rest": "放松；休息",
    "return": "归还；回来；返回",
    "right away": "立即；马上",
    "rise": "升起；增加；提高",
    "risk": "危险；风险；冒险",
    "rock": "岩石 / 摇滚乐",
    "rubbish": "垃圾；废弃物",
    "run out (of)": "用尽；耗尽",
    "safe": "安全的；无危险的",
    "sand": "沙；沙滩",
    "satisfaction": "满足；满意",
    "scene": "(戏剧或歌剧的)场；场景 / 景色",
    "science fiction": "科幻小说（或影片等）",
    "search": "搜索；搜查",
    "secondly": "第二；其次",
    "set up": "建起；设立",
    "several": "几个；数个；一些",
    "shame": "羞耻；羞愧；惭愧",
    "shocked": "惊愕的；受震惊的",
    "shoot": "射击；发射 / 拍摄",
    "sign": "标志；信号 / 签名",
    "silence": "沉默；寂静；无声", // 添加名词含义
    "silk": "丝绸；丝织物",
    "silly": "蠢的；不明事理的",
    "simply": "仅仅；只；不过",
    "since": "因为；既然 / 从……以后；自……以来",
    "sir": "先生",
    "situation": "情况；状况；形势",
    "skill": "技艺；技巧",
    "smile": "笑；微笑",
    "snack": "点心；小吃；快餐",
    "social": "社会的", // 添加形容词含义
    "soft": "软的；柔软的",
    "soft toy": "软体玩具；布绒玩具",
    "somewhere": "在某处；到某处",
    "sore": "疼痛的；酸痛的", // 添加形容词含义
    "southern": "南方的；南部的",
    "southwestern": "西南的；西南方向的",
    "spirit": "勇气；意志 / 精神；灵魂",
    "square": "平方；正方形 / 广场",
    "stepmother": "继母",
    "stepsister": "继姐妹",
    "stick": "棍；条 / 粘贴",
    "stomach": "胃；腹部",
    "stomachache": "胃痛；腹痛", // 添加名词含义
    "stone": "石头",
    "storm": "暴风雨",
    "strange": "陌生的；奇怪的",
    "stress": "精神压力；心理负担",
    "stupid": "愚蠢的",
    "succeed": "实现目标；成功",
    "success": "成功", // 添加名词含义
    "suddenly": "突然；忽然",
    "sunburned": "晒伤的",
    "tail": "尾巴",
    "take after": "(外貌、行为)像",
    "take breaks": "休息一下", // 简化
    "take care of": "照顾；处理",
    "take down": "拆除；往下拽；记录",
    "take in": "吸入；吞入（体内) / 理解；欺骗",
    "take one's temperature": "量体温",
    "take out the rubbish": "倒垃圾",
    "take risks": "冒险", // 简化
    "tea art": "茶艺",
    "tea set": "茶具",
    "technology": "科技；工艺",
    "terrorist": "恐怖主义者；恐怖分子",
    "the pacific ocean": "太平洋",
    "theme": "主题", // 添加名词含义
    "thick": "厚的；浓的",
    "thousand": "千",
    "thousands of": "数以千计的；许许多多的",
    "throat": "咽喉；喉咙", // 添加名词含义
    "throw": "扔；掷",
    "to be honest": "说实在的",
    "to one's surprise": "使……惊奇的是；出乎……的意料",
    "toilet": "坐便器；厕所",
    "tool": "工具",
    "toothache": "牙痛", // 添加名词含义
    "tour": "旅行；旅游",
    "towards": "朝；向；对着",
    "tower": "塔；塔楼",
    "training": "训练；培训",
    "treasure": "财富；珍宝",
    "trouble": "麻烦；困难；烦恼",
    "truth": "真相；事实",
    "truthful": "诚实的；真实的",
    "try out": "参加……选拔；试用",
    "turn... into": "(使)变成",
    "typical": "典型的；有代表性的",
    "unbelievable": "难以置信的；不真实的",
    "understand": "理解；领会",
    "underwear": "内衣",
    "unfair": "不合理的；不公正的",
    "unusual": "特别的；不寻常的",
    "up to": "到达（某数量、程度等）；至多有；不多于 / 忙于；打算做",
    "used to": "曾经……；过去……",
    "usual": "通常的；寻常的",
    "voice": "嗓音；声音",
    "volunteer": "义务做；自愿做 / 志愿者",
    "walk into": "走进；不小心撞上",
    "waste": "浪费；废料； / 浪费；滥用",
    "weak": "虚弱的；无力的",
    "weigh": "重量是……；称……的重量",
    "western": "西方国家的；（尤指）欧美的；西方的",
    "whale": "鲸", // 添加名词含义
    "what's the matter?": "怎么了？出什么事了？",
    "what's wrong?": "哪儿不舒服？怎么了？",
    "whatever": "任何；每一 / 无论什么",
    "wheel": "车轮；轮子",
    "whenever": "在任何……的时候；无论何时",
    "whether": "不管(还是)；或者……（或者）；是否",
    "while": "与…同时；当……的时候；而；然而 / 一段时间；一会儿",
    "whole": "全部的；整体的",
    "wide": "宽的；宽阔的",
    "wife": "妻子；太太",
    "wild": "野生的；未开发的 / 疯狂的",
    "wood": "木；木头",
    "work out": "成功地发展；解决 / 锻炼身体",
    "wrong": "有毛病；错误的", // 添加形容词含义
    "x-ray": "X射线；X光",
    "yard": "院子",
    "yard sale": "庭院拍卖会",
    "central park": "中央公园",
    "huangguoshu waterfall": "黄果树瀑布",
    "hong kong": "香港",
    "malaysia": "马来西亚",
    "malaysian": "马来西亚的 / 马来西亚人",
    "georgetown": "乔治市",
    "weld quay": "海墘街",
    "penang hill": "槟城山",
    "tiananmen square": "天安门广场",
    "the palace museum": "故宫博物院",
    "hardly": "几乎不; 几乎没有",
    "ever": "在任何时候; 从来; 曾经",
    "hardly ever": "几乎从不",
    "once": "一次; 曾经",
    "twice": "两次; 两倍",
    "internet": "(国际)互联网; 因特网",
    "program": "节目；程序", // programme 也是一样
    "full": "忙的; 满的; 充满的", // 添加形容词含义
    "swing dance": "摇摆舞",
    "maybe": "大概; 或许; 可能",
    "least": "最小; 最少 / 最小的; 最少的",
    "at least": "至少; 不少于; 起码",
    "junk": "无用的东西; 无价值的东西",
    "junk food": "垃圾食品",
    "health": "健康; 人的身体(或精神)状态", // 添加名词含义
    "result": "结果; 后果",
    "percent": "百分之……",
    "online": "在线(的); 联网(的)",
    "television": "电视节目; 电视机",
    "although": "虽然; 尽管; 即使",
    "through": "以; 凭借; 穿过",
    "mind": "头脑; 心智 / 介意", // 添加名词/动词含义
    "body": "身体",
    "such": "这样的; 那样的; 类似的",
    "such as": "例如; 像……这样",
    "together": "在一起; 共同",
    "die": "消失; 灭亡; 死亡",
    "dentist": "牙科医生",
    "however": "然而; 不过",
    "than": "(用以引出比较的第二部分)比",
    "more than": "多于",
    "almost": "几乎; 差不多",
    "none": "没有一个; 毫无",
    "less": "较少; 较小 / 较少的; 更少的",
    "less than": "少于",
    "point": "得分; 点 / 指; 指向",
    "quietly": "轻声地; 轻柔地; 安静地",
    "hard-working": "工作努力的; 辛勤的",
    "competition": "比赛; 竞赛; 竞争",
    "fantastic": "极好的; 了不起的",
    "which": "哪一个; 哪一些",
    "clearly": "清楚地; 清晰地; 明白地",
    "win": "获胜; 赢; 赢得",
    "though": "不过; 可是; 然而 / 虽然; 尽管; 不过",
    "talented": "有才能的; 有才干的",
    "truly": "真正; 确实",
    "care": "在意; 担忧; 关心 / 关心；照顾",
    "care about": "关心; 在意",
    "laugh": "笑; 发笑 / 笑声",
    "serious": "严肃的; 稳重的 / 严重的",
    "as long as": "只要; 既然",
    "necessary": "必需的; 必要的",
    "be different from": "与……不同; 与……有差异",
    "bring out": "使显现; 使表现出",
    "outgoing": "爱交际的; 友好的; 外向的",
    "both": "两个; 两个都",
    "loudly": "喧闹地; 大声地; 响亮地",
    "grade": "成绩等级; 评分等级 / 年级",
    "should": "应该; 应当; 可以",
    "the same as": "和……相同; 与……一致",
    "saying": "谚语; 格言; 警句",
    "reach": "伸手; 到达; 抵达",
    "hand": "手 / 传递", // 添加动词含义
    "touch": "感动; 触摸",
    "heart": "内心; 心脏",
    "fact": "现实; 事实",
    "in fact": "确切地说; 事实上; 实际上",
    "break": "(使)破; 裂; 碎; 损坏",
    "arm": "手臂; 上肢",
    "share": "分享; 共享; 共用; 分摊",
    "loud": "响亮的; 大声的",
    "similar": "相像的; 类似的",
    "be similar to": "与……相像的、类似的",
    "primary": "最初的; 最早的",
    "primary school": "小学",
    "information": "信息; 消息",
    "comfortable": "使人舒服的; 舒适的",
    "seat": "座位; 坐处(如椅子等)",
    "screen": "银幕; 屏幕",
    "ticket": "票; 入场券",
    "worst": "最差(的); 最坏(的); 最糟(的)",
    "cheaply": "便宜地; 低廉地",
    "song": "歌; 歌曲",
    "dj": "(电台、电视台、俱乐部的)音乐节目主持人",
    "choose": "选择; 挑选",
    "carefully": "细致地; 小心地; 谨慎地", // 添加副词
    "so far": "到目前为止; 迄今为止",
    "comfortably": "舒服地; 舒适地",
    "worse": "更差(的); 更坏(的); 更糟(的)",
    "service": "接待; 服务",
    "act": "扮演 / 表演者；行为", // 添加名词/动词
    "creative": "有创造力的; 创造性的",
    "performer": "表演者; 演员",
    "talent": "天资; 天赋", // 添加名词
    "have...in common": "有相同特征; (想法、兴趣等方面)相同",
    "magician": "魔术师",
    "all kinds of": "各种类型的; 各种各样的",
    "beautifully": "美好地; 漂亮地",
    "be up to": "是……的职责; 由……决定",
    "role": "作用; 职能; 角色", // 添加名词
    "play a role": "发挥作用; 有影响",
    "winner": "获胜者; 优胜者",
    "prize": "奖; 奖品; 奖金",
    "everybody": "每人; 人人; 所有人",
    "make up": "编造(故事、谎言等) / 化妆；组成",
    "example": "实例; 范例",
    "for example": "例如",
    "poor": "贫穷的; 清贫的 / 可怜的",
    "seriously": "严重地; 严肃地; 认真地",
    "take...seriously": "认真对待……",
    "give": "提供; 给", // 添加动词
    "crowded": "人多的; 拥挤的; 挤满的",
    "joke": "笑话; 玩笑",
    "sitcom": "情景喜剧",
    "news": "新闻节目; 新闻",
    "soap opera": "肥皂剧",
    "stand": "忍受; 站立",
    "educational": "教育的; 有教育意义的",
    "plan": "打算; 计划", // 添加名词/动词
    "hope": "希望",
    "find out": "查明; 弄清",
    "discussion": "讨论; 商量",
    "happen": "发生; 出现",
    "expect": "预料; 期待",
    "comedy": "喜剧; 喜剧片",
    "meaningless": "毫无意义的; 意思不明确的",
    "action": "行动",
    "action movie": "动作影片",
    "cartoon": "动画片; 卡通片",
    "appear": "出现",
    "rich": "富有的",
    "might": "可能; 可以",
    "main": "主要的; 最重要的",
    "reason": "原因; 理由",
    "common": "普通的; 常见的", // 添加形容词
    "film": "电影", // movie
    "unlucky": "不幸的; 不吉利的",
    "lose": "失去; 丢失",
    "girlfriend": "女朋友",
    "ready": "愿意的; 准备好的",
    "be ready to": "准备好(做某事); 愿意(做某事)",
    "simple": "简单的; 易做的", // 添加形容词
    "dress up": "装扮; 乔装打扮",
    "take sb.'s place": "代替某人",
    "army": "陆军; 陆军部队",
    "do a good job": "干得好",
    "grow up": "长大; 成熟; 成长",
    "computer programmer": "计算机程序设计员; 编程人员",
    "violinist": "小提琴手",
    "pilot": "飞行员",
    "pianist": "钢琴家",
    "scientist": "科学家", // 添加名词
    "be sure about": "确信; 对……有把握",
    "make sure": "确保; 查明",
    "college": "学院; 大学; 高等专科学校",
    "education": "教育", // 添加名词
    "university": "(综合性)大学; 高等学府", // 添加名词
    "article": "文章; 论文",
    "resolution": "决心; 决定",
    "team": "队; 组",
    "make the soccer team": "成为足球队的一员",
    "foreign": "外国的",
    "able": "能够",
    "be able to": "能够做某事",
    "question": "表示疑问; 怀疑; 提问; 质询 / 问题",
    "meaning": "意义; 意思", // 添加名词
    "discuss": "讨论; 商量",
    "promise": "承诺; 诺言 / 许诺; 承诺",
    "beginning": "开头; 开端",
    "at the beginning of": "在……开始",
    "improve": "改进; 改善",
    "write down": "写下; 记录下",
    "physical": "身体的",
    "themselves": "他(她、它)们自己",
    "have to do with": "关于; 与……有关系",
    "self-improvement": "自我改进; 自我提高",
    "take up": "(尤指为消遣)学着做; 开始做",
    "hobby": "业余爱好",
    "weekly": "每周的(地)",
    "schoolwork": "学校作业; 功课",
    "personal": "个人的; 私人的",
    "relationship": "关系; 联系",
    "the old man and the sea": "《老人与海》",
    "paper": "纸; 纸张 / 报纸；论文",
    "pollution": "污染; 污染物",
    "prediction": "预言; 预测",
    "future": "将来; 未来",
    "pollute": "污染",
    "environment": "环境",
    "planet": "行星",
    "earth": "地球; 世界 / 泥土",
    "play a part": "参与; 发挥作用",
    "peace": "和平",
    "sea": "海; 海洋", // 添加名词
    "build": "建筑; 建造",
    "astronaut": "宇航员; 航天员",
    "apartment": "公寓套房",
    "rocket": "火箭",
    "space": "太空; 空间",
    "space station": "太空站; 宇宙空间站",
    "human": "人的 / 人",
    "servant": "仆人",
    "dangerous": "有危险的; 不安全的",
    "already": "已经; 早已",
    "over and over again": "多次; 反复地",
    "japan": "日本",
    "believe": "相信; 认为有可能",
    "disagree": "不同意; 持不同意见; 有分歧",
    "even": "甚至; 连; 愈加",
    "agree": "同意; 赞成; 应允",
    "hundreds of": "许多; 大量",
    "shape": "形状; 外形 / 塑造",
    "fall down": "突然倒下; 跌倒; 倒塌",
    "inside": "在……里面",
    "look for": "寻找; 寻求",
    "possible": "可能存在或发生的; 可能的",
    "impossible": "不可能存在或发生的; 不可能的",
    "side": "一方(的意见、态度、立场) / 边；旁边",
    "probably": "很可能; 大概",
    "during": "在……期间",
    "holiday": "假期; 假日",
    "word": "单词; 词 / 话语",
    "shake": "摇动; 抖动",
    "milkshake": "奶昔",
    "blender": "食物搅拌器",
    "turn on": "接通(电流、煤气、水等); 打开",
    "peel": "剥皮; 去皮 / 皮",
    "pour": "倒出; 倾倒",
    "yogurt": "酸奶", // yoghurt
    "honey": "蜂蜜",
    "add": "增加; 添加",
    "finally": "最后; 最终",
    "salt": "食盐", // 添加名词
    "sugar": "食糖",
    "cheese": "干酪; 奶酪",
    "popcorn": "爆米花",
    "corn": "玉米; 谷物",
    "dig": "掘(地); 凿(洞); 挖(土)",
    "sandwich": "夹心面包片; 三明治",
    "butter": "黄油; 奶油",
    "lettuce": "莴苣; 生菜",
    "piece": "片; 块; 段",
    "thanksgiving": "感恩节",
    "traditional": "传统的; 惯例的",
    "traveler": "漂泊者; 旅行者; 游客",
    "celebrate": "庆祝; 庆贺",
    "mix": "(使)混合; 融合", // 添加动词
    "pepper": "胡椒粉; 柿子椒",
    "fill": "(使)充满; 装满",
    "oven": "烤箱; 烤炉",
    "cover": "遮盖; 覆盖 / 覆盖物; 盖子 / 封面",
    "gravy": "(调味)肉汁",
    "serve": "接待; 服务; 提供",
    "temperature": "温度; 气温; 体温", // 添加名词
    "prepare for": "为……做准备",
    "go to the doctor": "去看医生",
    "flu": "流行性感冒; 流感",
    "available": "有空的; 可获得的",
    "another time": "其他时间; 别的时间",
    "until": "到……时; 直到……为止",
    "hang": "悬挂; 垂下", // 添加动词
    "hang out": "闲逛; 常去某处",
    "catch": "及时赶上; 接住; 抓住 / 患上（疾病）", // 添加动词
    "accept": "接受",
    "refuse": "拒绝",
    "the day before yesterday": "前天",
    "the day after tomorrow": "后天",
    "weekday": "工作日",
    "look after": "照顾",
    "invitation": "邀请; 请柬",
    "turn down": "拒绝 / 调小音量",
    "reply": "回答; 答复",
    "forward": "转寄; 发送 / 向前; 前进",
    "delete": "删除",
    "print": "打印; 印刷",
    "goodbye": "再见",
    "glad": "高兴; 愿意",
    "help out": "(帮助……)分担工作、解决难题",
    "preparation": "准备; 准备工作",
    "glue": "胶水 / 粘贴",
    "without": "没有; 不(做某事)",
    "surprised": "惊奇的; 感觉意外的",
    "look forward to": "盼望; 期待",
    "hear from": "接到(某人的)信、电话等",
    "housewarming": "乔迁聚会",
    "opening": "开幕式; 落成典礼 / 开口；空缺",
    "concert": "音乐会; 演奏会",
    "headmaster": "校长",
    "daytime": "白天; 日间",
    "potato chips": "炸土豆片; 炸薯条",
    "upset": "难过; 失望; 沮丧 / 打乱",
    "agent": "代理人; 经纪人",
    "keep...to oneself": "保守秘密",
    "unless": "除非; 如果不",
    "certainly": "无疑; 肯定; 当然; 行",
    "wallet": "钱包",
    "mile": "英里",
    "understanding": "善解人意的; 体谅人的 / 理解；谅解",
    "careless": "粗心的; 不小心的",
    "mistake": "错误; 失误",
    "himself": "他自己",
    "careful": "小心的; 细致的; 精心的; 慎重的", // 添加形容词
    "advise": "劝告; 建议",
    "solve": "解决; 解答",
    "step": "步; 步骤 / 走；踏",
    "trust": "相信; 信任",
    "experience": "经验; 经历 / 体验；经历",
    "in half": "分成两半",
    "halfway": "在中途; 部分地做(或达到)",
    "else": "别的; 其他的"
    // --- 结束添加新单词 (根据新列表) ---
};
// !!! 结束数据区 !!!

const WORDS_PER_PAGE = 20; // 每页显示的单词对数量

// --- 后续 JS 代码 (全局变量, 获取元素, 函数定义, 初始化等) 保持不变 ---

let allWordKeys = Object.keys(wordDictFull); // 获取所有英文单词(key)
if (allWordKeys.length === 0) {
    console.error("错误：单词字典为空或未能正确加载！");
    // 可以添加一个提示给用户，或者使用备用数据
    wordDictFull = { 'error': '错误', 'loading': '加载', 'data': '数据' };
    allWordKeys = Object.keys(wordDictFull);
}

let allWordKeysShuffled = [...allWordKeys]; // 创建副本用于打乱
shuffleArray(allWordKeysShuffled); // <--- 正确的行

let totalWordCount = allWordKeysShuffled.length;
let totalPages = Math.ceil(totalWordCount / WORDS_PER_PAGE) || 1;
let currentPageIndex = 0;

let currentWordItems = [];
let score = 0;
let selectedEnglishElement = null;
let gameIsOver = false;

// 获取 HTML 元素的引用
const scoreEl = document.getElementById('score');
const currentPageEl = document.getElementById('current-page');
const totalPagesEl = document.getElementById('total-pages');
const englishColumnEl = document.getElementById('english-column');
const chineseColumnEl = document.getElementById('chinese-column');
const feedbackEl = document.getElementById('feedback-area');
const visualFeedbackEl = document.getElementById('visual-feedback');
const gameOverEl = document.getElementById('game-over-message');
const finalScoreEl = document.getElementById('final-score');


// ---- 2. 辅助函数 ----

// 随机打乱数组 (Fisher-Yates Shuffle) - 定义 shuffle 函数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// Call shuffle after definition
shuffleArray(allWordKeysShuffled);


function updateGameInfo() {
    scoreEl.textContent = score;
    currentPageEl.textContent = currentPageIndex + 1;
    totalPagesEl.textContent = totalPages;
}

function showFeedback(message, type) {
    feedbackEl.textContent = message;
    feedbackEl.className = 'feedback-' + type;
}

function showVisualFeedback(type, targetElement) {
    if (!targetElement || !visualFeedbackEl) return;
    visualFeedbackEl.textContent = (type === 'correct') ? '🎆' : '😥';
    const rect = targetElement.getBoundingClientRect();
    const x = rect.left + window.scrollX + rect.width / 2 - 16; // Approx center, adjust 16 based on font size
    const y = rect.top + window.scrollY - 35; // Approx above, adjust 35 based on font size
    visualFeedbackEl.style.left = `${x}px`;
    visualFeedbackEl.style.top = `${y}px`;
    visualFeedbackEl.classList.add('show');
    setTimeout(() => { visualFeedbackEl.classList.remove('show'); }, 800);
}


// ---- 3. 核心游戏逻辑 ----

function loadPage(pageIndex) {
    if (pageIndex < 0 || pageIndex >= totalPages) { console.error("无效页码:", pageIndex); return; }
    console.log(`加载页面: ${pageIndex + 1}`);

    const startIndex = pageIndex * WORDS_PER_PAGE;
    const endIndex = startIndex + WORDS_PER_PAGE;
    const pageKeys = allWordKeysShuffled.slice(startIndex, endIndex);

    const currentPageWordData = {};
    pageKeys.forEach(key => { if (wordDictFull[key]) { currentPageWordData[key] = wordDictFull[key]; } });

    englishColumnEl.innerHTML = '<h2>英文单词</h2>';
    chineseColumnEl.innerHTML = '<h2>中文翻译</h2>';
    currentWordItems = [];
    selectedEnglishElement = null;
    feedbackEl.textContent = ''; feedbackEl.className = '';
    if(visualFeedbackEl) visualFeedbackEl.classList.remove('show');

    let chineseTranslations = pageKeys.map(key => currentPageWordData[key]).filter(t => t);
    shuffleArray(chineseTranslations);

    const tempEngItems = [];
    pageKeys.forEach(key => {
        const wordDiv = document.createElement('div');
        wordDiv.textContent = key; wordDiv.className = 'word-item';
        wordDiv.dataset.type = 'en'; wordDiv.dataset.key = key;
        wordDiv.addEventListener('click', handleWordClick);
        tempEngItems.push(wordDiv); // Add to temp list first
    });

     const tempChnItems = [];
    // Keep track of keys used for Chinese items to handle duplicate translations within a page
    const usedKeysForChinese = new Set();
    chineseTranslations.forEach(translation => {
        let originalKey = null;
        // Find a key for this translation *that hasn't been used yet* for a Chinese item on this page
        for (const key of pageKeys) {
             if (currentPageWordData[key] === translation && !usedKeysForChinese.has(key)) {
                 originalKey = key;
                 break;
             }
        }

        if (originalKey) {
            usedKeysForChinese.add(originalKey); // Mark this key as used for a Chinese item
            const wordDiv = document.createElement('div');
            wordDiv.textContent = translation; wordDiv.className = 'word-item';
            wordDiv.dataset.type = 'zh'; wordDiv.dataset.key = originalKey;
            wordDiv.addEventListener('click', handleWordClick);
            tempChnItems.push(wordDiv); // Add to temp list
        } else {
            console.warn("无法为中文翻译找到唯一的、未使用的 key:", translation);
             // Maybe try finding *any* matching key even if used? Or skip this translation?
             // For simplicity, we skip if no unique key found for this instance.
        }
    });

    // Append items to columns after creating all for potentially better layout flow
    tempEngItems.forEach(item => englishColumnEl.appendChild(item));
    tempChnItems.forEach(item => chineseColumnEl.appendChild(item));
    currentWordItems = tempEngItems.concat(tempChnItems); // Combine lists


    updateGameInfo();
}


function handleWordClick(event) {
    if (gameIsOver) return;
    const clickedElement = event.target;
    if (!clickedElement.classList.contains('word-item') || clickedElement.classList.contains('matched')) return;

    const type = clickedElement.dataset.type;
    const key = clickedElement.dataset.key;

    if (type === 'en') {
        if (selectedEnglishElement) selectedEnglishElement.classList.remove('selected');
        clickedElement.classList.add('selected');
        selectedEnglishElement = clickedElement;
        showFeedback('', '');
    } else if (type === 'zh') {
        if (!selectedEnglishElement) { showFeedback('请先选择一个英文单词!', 'info'); return; }
        if (key === selectedEnglishElement.dataset.key) {
            score += 10; updateGameInfo(); showFeedback('正确!', 'correct');
            showVisualFeedback('correct', clickedElement);
            selectedEnglishElement.classList.add('matched'); selectedEnglishElement.classList.remove('selected');
            clickedElement.classList.add('matched');
            selectedEnglishElement = null;
            checkPageCompletion();
        } else {
            showFeedback('再试一次!', 'incorrect'); showVisualFeedback('incorrect', clickedElement);
            if(selectedEnglishElement) selectedEnglishElement.classList.remove('selected'); // Deselect on wrong guess
            selectedEnglishElement = null;
            // Optional shake effect (needs CSS)
            // clickedElement.classList.add('shake');
            // setTimeout(() => clickedElement.classList.remove('shake'), 300);
        }
    }
}


function checkPageCompletion() {
    // Check based on the dynamically generated items for the current page
    const allMatched = currentWordItems.every(item => item.classList.contains('matched'));

    if (allMatched && currentWordItems.length > 0) { // Ensure page wasn't empty
        console.log(`页面 ${currentPageIndex + 1} 完成!`);
        // Add a slight delay before proceeding
        setTimeout(() => {
            if (currentPageIndex + 1 < totalPages) {
                currentPageIndex++;
                showFeedback(`加载第 ${currentPageIndex + 1} 组...`, 'info');
                // Add another small delay before actually loading, letting feedback show
                setTimeout(() => {
                     loadPage(currentPageIndex);
                 }, 500); // 0.5 sec delay
            } else {
                gameIsOver = true;
                showFeedback('恭喜！全部完成！', 'correct');
                showGameOver();
            }
        }, 1000); // 1 sec delay after last correct match
    }
}


function showGameOver() {
    finalScoreEl.textContent = score;
    gameOverEl.classList.remove('hidden');
}


// ---- 4. 游戏初始化 ----
window.onload = () => {
    if (totalWordCount === 0) {
        showFeedback("错误：没有加载到单词数据！", 'incorrect');
        console.error("单词字典为空或加载失败。");
        englishColumnEl.innerHTML = '<h2>加载错误</h2>';
        chineseColumnEl.innerHTML = '<p>请检查单词数据。</p>';
        return;
    }
    // Note: allWordKeysShuffled is already shuffled globally now
    loadPage(currentPageIndex);
};