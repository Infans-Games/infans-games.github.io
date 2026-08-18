(() => {
  const supportedLanguages = ['zh-CN', 'en', 'ja'];
  const storageKey = 'infans-site-language';
  const body = document.body;
  const page = body.dataset.page || 'home';

  const common = {
    en: {
      'common.skip': 'Skip to main content',
      'common.nav.label': 'Official site navigation',
      'common.brand.home': 'Infans Studio home',
      'common.nav.open': 'Open navigation',
      'common.nav.close': 'Close navigation',
      'common.nav.home': 'Home',
      'common.nav.games': 'Games',
      'common.nav.works': 'Other works',
      'common.nav.studio': 'Studio',
      'common.nav.support': 'Support',
      'common.nav.privacy': 'Privacy',
      'common.nav.play': 'Play now',
      'common.language.label': 'Choose language',
      'common.footer.label': 'Footer navigation',
      'common.footer.top': 'Back to top ↑',
      'common.footer.copyright': '© 2026 Shanghai Infans Digital Technology Co., Ltd.'
    },
    'zh-CN': {
      'common.skip': '跳到主要内容',
      'common.nav.label': '官网导航',
      'common.brand.home': 'Infans Studio 首页',
      'common.nav.open': '打开导航',
      'common.nav.close': '关闭导航',
      'common.nav.home': '首页',
      'common.nav.games': '游戏',
      'common.nav.works': '其他作品',
      'common.nav.studio': '工作室',
      'common.nav.support': '支持',
      'common.nav.privacy': '隐私政策',
      'common.nav.play': '立即试玩',
      'common.language.label': '选择语言',
      'common.footer.label': '页尾导航',
      'common.footer.top': '回到顶部 ↑',
      'common.footer.copyright': '© 2026 上海未孩数字科技有限公司'
    },
    ja: {
      'common.skip': 'メインコンテンツへ移動',
      'common.nav.label': '公式サイトナビゲーション',
      'common.brand.home': 'Infans Studio ホーム',
      'common.nav.open': 'ナビゲーションを開く',
      'common.nav.close': 'ナビゲーションを閉じる',
      'common.nav.home': 'ホーム',
      'common.nav.games': 'ゲーム',
      'common.nav.works': 'その他の作品',
      'common.nav.studio': 'スタジオ',
      'common.nav.support': 'サポート',
      'common.nav.privacy': 'プライバシー',
      'common.nav.play': '今すぐプレイ',
      'common.language.label': '言語を選択',
      'common.footer.label': 'フッターナビゲーション',
      'common.footer.top': 'ページ上部へ ↑',
      'common.footer.copyright': '© 2026 Shanghai Infans Digital Technology Co., Ltd.'
    }
  };

  const home = {
    en: {
      'meta.title': 'Infans Studio · Independent Games',
      'meta.description': 'Infans Studio is an independent game studio in Shanghai, creating cultivation RPGs and original interactive worlds.',
      'meta.ogDescription': 'The world is vast. A mortal still chooses their own path.',
      'home.hero.kicker': 'Independent game studio · Shanghai',
      'home.hero.title1': 'The world is vast.',
      'home.hero.title2': 'A mortal still chooses their own path.',
      'home.hero.lead': 'Infans is an independent game studio. We are drawn to the long journeys of cultivation tales—and to the choices people make between gain and loss. We turn those questions into games, one careful step at a time.',
      'home.hero.play': 'Play Resign to Cultivate',
      'home.hero.flagship': 'Explore Quit to Cultivate',
      'home.hero.live': 'Web demo · Mortal Realm available now',
      'home.hero.enter': 'ENTER',
      'home.web.label': 'PLAYABLE NOW · WEB GAME',
      'home.web.title': 'Resign to Cultivate',
      'home.web.subtitle': 'Mortal Realm Demo',
      'home.web.lead': 'Begin in a quiet cave dwelling, then venture into the wild to gather herbs, mine ore, and face whatever finds you. Every step consumes lifespan. What you bring home—and when you turn back—is your choice. What one life leaves unfinished may wait for the next.',
      'home.web.features': 'Game features',
      'home.web.tag1': 'Portrait web',
      'home.web.tag2': 'Grid exploration',
      'home.web.tag3': 'Auto combat',
      'home.web.tag4': 'Reincarnation',
      'home.web.cta': 'Leave the cave',
      'home.web.platform': 'No download · Works on mobile and desktop browsers · Saves stay on this device',
      'home.web.alt': 'Resign to Cultivate cave dwelling gameplay',
      'home.web.caption': 'Real gameplay · Cave dwelling',
      'home.flagship.label': 'PC FLAGSHIP · STEAM',
      'home.flagship.title': 'Quit to Cultivate',
      'home.flagship.subtitle': 'Mortal Realm',
      'home.flagship.lead': 'Our flagship PC cultivation RPG links exploration, combat, and cave management into one journey. Lifespan gives every expedition a cost; reincarnation turns failure into the opening of another life.',
      'home.flagship.steam': 'View on Steam',
      'home.flagship.tags': 'Roguelite RPG · Expedition & extraction · Cave management',
      'home.flagship.gallery': 'Quit to Cultivate gameplay gallery',
      'home.flagship.caveAlt': 'Quit to Cultivate cave dwelling gameplay',
      'home.flagship.caveCaption': 'Cave gameplay',
      'home.flagship.battleAlt': 'Quit to Cultivate combat gameplay',
      'home.flagship.battleCaption': 'Combat gameplay',
      'home.works.title': 'Games from<br class="mobile-only-break"> other worlds.',
      'home.works.lead': 'Different themes, the same starting point: make something inviting to play, then give the experience time to stay with you.',
      'home.works.dev': 'In development',
      'home.works.alpha': '0.1 Alpha · Public playtest',
      'home.works.noInterestLabel': 'FINANCIAL LIFE SIMULATION',
      'home.works.noInterestTitle': 'No Interest',
      'home.works.noInterestSubtitle': '财不理你',
      'home.works.noInterestAlt': 'No Interest financial life simulation from 1990 to 2024',
      'home.works.noInterestLead': 'Live one financial life through real market cycles. Balance income, spending, cash reserves and investing from 1990 to 2024—using only what your character could have known at the time.',
      'home.works.noInterestCta': 'Play the public alpha',
      'home.works.eggTitle': 'Eggling Japanese',
      'home.works.eggAlt': 'Eggling Japanese home screen gameplay',
      'home.works.eggLead': 'Vocabulary, reading, and everyday expressions become part of small games and a gentle progression loop—so learning does not end with memorisation.',
      'home.works.heartTitle': 'Heartbeat',
      'home.works.heartSubtitle': 'Character collection',
      'home.works.heartAlt': 'Heartbeat character interaction gameplay',
      'home.works.heartLead': 'One of our earlier complete games, built around character collection, affinity, small games, and conversation—a relationship designed to be encountered more than once.',
      'home.belief.title': 'A game should leave room<br>for players to find their own way.',
      'home.belief.choice': 'Choice',
      'home.belief.choiceLead': 'A meaningful choice always leaves something behind. Knowing when to press on and when to return is both a mechanic and a measure of character.',
      'home.belief.growth': 'Growth',
      'home.belief.growthLead': 'Numbers may rise, but understanding should deepen too. Learn more about the world, and the next decision ought to change.',
      'home.belief.rebirth': 'Rebirth',
      'home.belief.rebirthLead': 'Beginning again is not returning to zero. What one life gained—and what it regretted—should leave a trace in the next.',
      'home.contact.title': 'We are still making games.<br>The road ahead is long.',
      'home.contact.company': 'Shanghai Infans Digital Technology Co., Ltd.<br><span>上海未孩数字科技有限公司</span>'
    },
    'zh-CN': {
      'meta.title': 'Infans Studio · 未孩游戏',
      'meta.description': 'Infans Studio（上海未孩数字科技有限公司）官方网站。探索《辞职修仙传》《裸辞修仙传》等原创游戏。',
      'meta.ogDescription': '天地很大，凡人也有自己的路。',
      'home.hero.kicker': '独立游戏工作室 · 上海',
      'home.hero.title1': '天地很大，',
      'home.hero.title2': '凡人也有自己的路。',
      'home.hero.lead': '未孩是一间独立游戏工作室。我们喜欢修仙故事里漫长的跋涉，也关心人在得失之间怎样做选择。于是把这些念头，慢慢做成游戏。',
      'home.hero.play': '立即试玩《辞职修仙传》',
      'home.hero.flagship': '查看《裸辞修仙传》',
      'home.hero.live': '网页版 · 人界篇 Demo 现已开放试玩',
      'home.hero.enter': '入世',
      'home.web.label': '现已开放试玩 · WEB GAME',
      'home.web.title': '辞职修仙传',
      'home.web.subtitle': '人界篇 Demo',
      'home.web.lead': '从一座洞府出发，到山野里寻药、采矿、遭敌。每一步都会耗去寿元，带多少东西回来、什么时候回去，都要自己拿主意。此世若有未竟之事，便留待下一世再走。',
      'home.web.features': '游戏特色',
      'home.web.tag1': '竖屏网页',
      'home.web.tag2': '格子探索',
      'home.web.tag3': '自动战斗',
      'home.web.tag4': '轮回成长',
      'home.web.cta': '从洞府出发',
      'home.web.platform': '无需下载 · 支持手机和电脑浏览器 · 存档保存在本机',
      'home.web.alt': '《辞职修仙传》洞府真实游戏画面',
      'home.web.caption': '真实游戏画面 · 洞府',
      'home.flagship.label': 'PC 旗舰项目 · STEAM',
      'home.flagship.title': '裸辞修仙传',
      'home.flagship.subtitle': '人界篇',
      'home.flagship.lead': '这是我们正在打磨的 PC 修仙 RPG。探索、战斗与洞府经营彼此相连；寿元让每次出门都有代价，轮回则让失败成为下一世的开端。',
      'home.flagship.steam': '前往 Steam',
      'home.flagship.tags': 'Roguelite RPG · 搜打撤 · 洞府经营',
      'home.flagship.gallery': '《裸辞修仙传》实机画面',
      'home.flagship.caveAlt': '《裸辞修仙传》神秘洞府实机画面',
      'home.flagship.caveCaption': '洞府实机画面',
      'home.flagship.battleAlt': '《裸辞修仙传》战斗实机画面',
      'home.flagship.battleCaption': '战斗实机画面',
      'home.works.title': '修仙之外，<br class="mobile-only-break">我们也做过这些。',
      'home.works.lead': '题材各不相同，但都从一个简单的念头开始：先让人愿意玩进去，再让体验慢慢留下来。',
      'home.works.dev': '开发中',
      'home.works.alpha': '0.1 Alpha · 公开试玩',
      'home.works.noInterestLabel': '金融人生模拟',
      'home.works.noInterestTitle': '财不理你',
      'home.works.noInterestSubtitle': 'NO INTEREST',
      'home.works.noInterestAlt': '《财不理你》1990 至 2024 年金融人生模拟画面',
      'home.works.noInterestLead': '在当时可知的信息里，管理一生的收入、支出、现金储备与资产配置，穿过 1990 至 2024 年的真实市场周期。财富是战绩，选择才是人生。',
      'home.works.noInterestCta': '开始公开试玩',
      'home.works.eggTitle': '蛋仔日语',
      'home.works.eggAlt': '《蛋仔日语》真实主页画面',
      'home.works.eggLead': '把词汇、阅读和日常表达放进小游戏与养成循环里，让学习不只停在背诵。',
      'home.works.heartTitle': '心动物语',
      'home.works.heartSubtitle': 'Heartbeat',
      'home.works.heartAlt': '《心动物语》角色互动真实游戏画面',
      'home.works.heartLead': '我们较早的一次完整游戏尝试。围绕角色收集、亲密度、小游戏与对话，做出一段可以反复相遇的关系。',
      'home.belief.title': '游戏里的路，<br>应该由玩家自己走出来。',
      'home.belief.choice': '选择',
      'home.belief.choiceLead': '真正的选择，总要舍掉一点什么。什么时候继续，什么时候回头，是玩法，也是人物的性情。',
      'home.belief.growth': '成长',
      'home.belief.growthLead': '数值会变强，认识也该变深。玩家对世界多懂一分，下一次决定就应该有所不同。',
      'home.belief.rebirth': '轮回',
      'home.belief.rebirthLead': '重来不等于归零。上一世的所得与遗憾，应该在下一世留下痕迹。',
      'home.contact.title': '游戏还在做，<br>路也还长。',
      'home.contact.company': '上海未孩数字科技有限公司<br><span>Shanghai Infans Digital Technology Co., Ltd.</span>'
    },
    ja: {
      'meta.title': 'Infans Studio · インディーゲーム',
      'meta.description': '上海のインディーゲームスタジオ Infans Studio。修仙RPGとオリジナルの物語世界を制作しています。',
      'meta.ogDescription': '天地は広く、凡人にも自分の道がある。',
      'home.hero.kicker': 'インディーゲームスタジオ · 上海',
      'home.hero.title1': '天地は広く、',
      'home.hero.title2': '凡人にも、自分の道がある。',
      'home.hero.lead': '未孩はインディーゲームスタジオです。修仙譚に描かれる長い旅路と、得るものと失うものの間で人が下す選択に惹かれています。そんな思いを、一つずつゲームにしています。',
      'home.hero.play': '『辞職修仙伝』をプレイ',
      'home.hero.flagship': '『裸辞修仙伝』を見る',
      'home.hero.live': 'Web版 · 人界篇デモ公開中',
      'home.hero.enter': '入世',
      'home.web.label': '今すぐプレイ · WEB GAME',
      'home.web.title': '辞職修仙伝',
      'home.web.subtitle': '人界篇 Demo',
      'home.web.lead': '一つの洞府から旅立ち、山野で薬草を探し、鉱石を掘り、敵と出会う。一歩ごとに寿命は減っていきます。何を持ち帰るか、いつ戻るかは、すべて自分次第。今生で果たせなかったことは、次の生へ託せます。',
      'home.web.features': 'ゲームの特徴',
      'home.web.tag1': '縦画面Web',
      'home.web.tag2': 'マス探索',
      'home.web.tag3': 'オートバトル',
      'home.web.tag4': '輪廻成長',
      'home.web.cta': '洞府を出る',
      'home.web.platform': 'ダウンロード不要 · スマートフォンとPCに対応 · セーブデータは端末内に保存',
      'home.web.alt': '『辞職修仙伝』洞府の実際のゲーム画面',
      'home.web.caption': '実際のゲーム画面 · 洞府',
      'home.flagship.label': 'PC フラッグシップ · STEAM',
      'home.flagship.title': '裸辞修仙伝',
      'home.flagship.subtitle': '人界篇',
      'home.flagship.lead': '現在制作中のPC向け修仙RPGです。探索、戦闘、洞府運営が一つの旅として結びつきます。寿命が遠征に代償を与え、輪廻が失敗を次の人生の始まりへ変えます。',
      'home.flagship.steam': 'Steamで見る',
      'home.flagship.tags': 'Roguelite RPG · 探索と撤収 · 洞府運営',
      'home.flagship.gallery': '『裸辞修仙伝』ゲーム画面',
      'home.flagship.caveAlt': '『裸辞修仙伝』神秘の洞府のゲーム画面',
      'home.flagship.caveCaption': '洞府画面',
      'home.flagship.battleAlt': '『裸辞修仙伝』戦闘画面',
      'home.flagship.battleCaption': '戦闘画面',
      'home.works.title': '修仙の外にも、<br class="mobile-only-break">こんな世界を作ってきました。',
      'home.works.lead': '題材は違っても、出発点は同じです。まず遊びたくなること、そして体験が心に残っていくこと。',
      'home.works.dev': '開発中',
      'home.works.alpha': '0.1 Alpha · 公開プレイテスト',
      'home.works.noInterestLabel': '金融人生シミュレーション',
      'home.works.noInterestTitle': '財不理你',
      'home.works.noInterestSubtitle': 'NO INTEREST',
      'home.works.noInterestAlt': '1990年から2024年を生きる金融人生シミュレーション『No Interest』',
      'home.works.noInterestLead': 'その時代に知り得た情報だけを頼りに、収入、支出、現金、資産配分を管理し、1990年から2024年までの実際の市場サイクルを生きます。',
      'home.works.noInterestCta': '公開アルファ版をプレイ',
      'home.works.eggTitle': 'たまご日本語',
      'home.works.eggAlt': '『たまご日本語』ホーム画面の実際のゲーム画像',
      'home.works.eggLead': '語彙、読解、日常表現をミニゲームと育成の循環に組み込み、学びを暗記だけで終わらせません。',
      'home.works.heartTitle': '心動物語',
      'home.works.heartSubtitle': 'Heartbeat',
      'home.works.heartAlt': '『心動物語』キャラクター交流の実際のゲーム画像',
      'home.works.heartLead': 'キャラクター収集、親密度、ミニゲーム、会話を中心に作った、私たちの初期の完成作品です。何度でも出会い直せる関係を描きました。',
      'home.belief.title': 'ゲームの道は、<br>プレイヤー自身が歩いてほしい。',
      'home.belief.choice': '選択',
      'home.belief.choiceLead': '本当の選択には、何かを手放す覚悟が伴います。進むか、戻るか。それは遊びであり、その人らしさでもあります。',
      'home.belief.growth': '成長',
      'home.belief.growthLead': '数値だけでなく、理解も深まってほしい。世界を知るほど、次の決断も変わっていくべきだと考えます。',
      'home.belief.rebirth': '輪廻',
      'home.belief.rebirthLead': 'やり直しはゼロに戻ることではありません。前世で得たものも、残した悔いも、次の生に痕跡を残します。',
      'home.contact.title': 'ゲームはまだ制作の途中。<br>道のりも、まだ続きます。',
      'home.contact.company': 'Shanghai Infans Digital Technology Co., Ltd.<br><span>上海未孩数字科技有限公司</span>'
    }
  };

  const supportMain = {
    en: `<section class="support-card"><h2>Contact</h2><p>Email: <a href="mailto:capoo@ifansstudio.com">capoo@ifansstudio.com</a></p><p class="muted">Please include the game title, device or platform, a description of the issue, and screenshots when available.</p></section><section class="support-card"><h2>Frequently asked questions</h2><div class="faq-list"><article><h3>What should I include in a bug report?</h3><p>Send the game title, device or platform, the steps before and after the issue, and any useful screenshots or recordings.</p></article><article><h3>What if I have trouble purchasing or downloading a game?</h3><p>Contact the store or platform first. If the developer still needs to help, email us afterwards.</p></article><article><h3>Where can I find project updates?</h3><p>Major updates appear on the relevant store page and through the project links on this website.</p></article></div></section>`,
    'zh-CN': `<section class="support-card"><h2>联系</h2><p>邮箱：<a href="mailto:capoo@ifansstudio.com">capoo@ifansstudio.com</a></p><p class="muted">请尽量附上游戏名称、设备或平台、问题描述和相关截图。</p></section><section class="support-card"><h2>常见问题</h2><div class="faq-list"><article><h3>发现 Bug 时需要提供什么？</h3><p>请发送游戏名称、设备或平台、问题发生前后的操作，以及可用的截图或录屏。</p></article><article><h3>购买或下载出现问题怎么办？</h3><p>请先联系取得游戏的平台；如果仍需游戏开发方协助，再通过邮箱联系我们。</p></article><article><h3>在哪里查看项目更新？</h3><p>重要更新会发布在对应商店页面，或在本官网的作品入口中更新。</p></article></div></section>`,
    ja: `<section class="support-card"><h2>お問い合わせ</h2><p>メール：<a href="mailto:capoo@ifansstudio.com">capoo@ifansstudio.com</a></p><p class="muted">ゲーム名、端末またはプラットフォーム、問題の内容、可能であればスクリーンショットを添えてください。</p></section><section class="support-card"><h2>よくある質問</h2><div class="faq-list"><article><h3>不具合の報告には何が必要ですか？</h3><p>ゲーム名、端末またはプラットフォーム、問題が起きる前後の操作、参考になる画像や録画をお送りください。</p></article><article><h3>購入やダウンロードに問題がある場合は？</h3><p>まず購入したストアまたはプラットフォームへお問い合わせください。開発元の対応が必要な場合は、改めてメールでご連絡ください。</p></article><article><h3>プロジェクトの更新情報はどこで確認できますか？</h3><p>重要な更新は各ストアページと、本サイトの作品リンクでお知らせします。</p></article></div></section>`
  };

  const support = {
    en: {
      'meta.title': 'Support | Infans Studio',
      'meta.description': 'Official support and contact information for Infans Studio games.',
      'support.title': 'Support',
      'support.hero': 'If you run into a problem or would like to share feedback, contact us through the official email below.',
      'support.main': supportMain.en
    },
    'zh-CN': {
      'meta.title': '支持与联系 | Infans Studio',
      'meta.description': 'Infans Studio 官方支持与联系页面。',
      'support.title': '支持与联系',
      'support.hero': '遇到游戏问题，或想向我们提供反馈，请通过下方官方邮箱联系。',
      'support.main': supportMain['zh-CN']
    },
    ja: {
      'meta.title': 'サポート | Infans Studio',
      'meta.description': 'Infans Studio ゲームの公式サポートとお問い合わせ先です。',
      'support.title': 'サポート',
      'support.hero': 'ゲームの問題やご意見は、下記の公式メールアドレスまでお寄せください。',
      'support.main': supportMain.ja
    }
  };

  const privacyMain = {
    en: `<section class="policy-card"><h2>Effective Date</h2><p>April 10, 2026</p></section><section class="policy-card"><h2>Who We Are</h2><p>Brand: Infans Studio</p><p class="muted">Legal name: Shanghai Infans Digital Technology Co., Ltd.</p></section><section class="policy-card"><h2>Information We Collect</h2><p>Our games and websites are designed to collect as little personal information as possible. Depending on the product, we may process limited technical data needed to operate the service, such as:</p><ul><li>basic device or platform information,</li><li>game progress or local settings,</li><li>support messages voluntarily sent to us.</li></ul></section><section class="policy-card"><h2>How We Use Information</h2><ul><li>to provide and maintain the game or website,</li><li>to improve stability, balance, and user experience,</li><li>to respond to support requests or feedback,</li><li>to meet legal obligations when required.</li></ul></section><section class="policy-card"><h2>Third-Party Services</h2><p>Some products may rely on third-party distribution or platform services, such as app stores, Steam, analytics providers, or cloud infrastructure. Those services may process data under their own privacy terms.</p></section><section class="policy-card"><h2>Children's Privacy</h2><p>We do not knowingly collect personal information from children through this website. If you believe a child has provided personal data to us, please contact us so we can review and delete it where appropriate.</p></section><section class="policy-card"><h2>Data Retention</h2><p>We keep information only for as long as reasonably necessary to provide services, resolve support issues, comply with legal obligations, or protect our legitimate interests.</p></section><section class="policy-card"><h2>Your Rights</h2><p>Subject to applicable law, you may request access to, correction of, or deletion of personal data you have provided to us.</p></section><section class="policy-card"><h2>Contact</h2><p>For privacy-related questions, please contact: <a href="mailto:capoo@ifansstudio.com">capoo@ifansstudio.com</a></p></section>`,
    'zh-CN': `<section class="policy-card"><h2>生效日期</h2><p>2026 年 4 月 10 日</p></section><section class="policy-card"><h2>关于我们</h2><p>品牌：Infans Studio</p><p class="muted">公司名称：上海未孩数字科技有限公司</p></section><section class="policy-card"><h2>我们处理的信息</h2><p>我们的网站和游戏遵循尽量少收集个人信息的原则。根据具体产品，为维持服务运行，我们可能处理少量必要的技术信息，例如：</p><ul><li>基础设备或平台信息；</li><li>游戏进度或本地设置；</li><li>你主动发送给我们的客服消息。</li></ul></section><section class="policy-card"><h2>信息的用途</h2><ul><li>提供和维护游戏或网站；</li><li>改进稳定性、平衡性和使用体验；</li><li>回复支持请求或反馈；</li><li>在必要时履行法律义务。</li></ul></section><section class="policy-card"><h2>第三方服务</h2><p>部分产品可能依赖应用商店、Steam、分析服务商或云基础设施等第三方发行与平台服务。这些服务可能依据其各自的隐私条款处理信息。</p></section><section class="policy-card"><h2>儿童隐私</h2><p>我们不会有意通过本网站收集儿童的个人信息。如果你认为有儿童向我们提供了个人数据，请联系我们，以便在适当情况下核查并删除。</p></section><section class="policy-card"><h2>数据保留</h2><p>我们只在提供服务、处理支持问题、履行法律义务或保护合法权益所合理需要的期限内保留信息。</p></section><section class="policy-card"><h2>你的权利</h2><p>在适用法律允许的范围内，你可以请求访问、更正或删除你向我们提供的个人数据。</p></section><section class="policy-card"><h2>联系我们</h2><p>如有隐私相关问题，请联系：<a href="mailto:capoo@ifansstudio.com">capoo@ifansstudio.com</a></p></section>`,
    ja: `<section class="policy-card"><h2>施行日</h2><p>2026年4月10日</p></section><section class="policy-card"><h2>運営者について</h2><p>ブランド：Infans Studio</p><p class="muted">法人名：Shanghai Infans Digital Technology Co., Ltd.</p></section><section class="policy-card"><h2>取り扱う情報</h2><p>当スタジオのゲームとウェブサイトは、個人情報の取得を必要最小限に抑える方針で設計されています。製品によっては、サービスの運営に必要な範囲で、次のような限定的な技術情報を取り扱う場合があります。</p><ul><li>基本的な端末またはプラットフォーム情報</li><li>ゲームの進行状況または端末内の設定</li><li>お客様が任意で送信したサポートメッセージ</li></ul></section><section class="policy-card"><h2>情報の利用目的</h2><ul><li>ゲームまたはウェブサイトの提供と維持</li><li>安定性、バランス、利用体験の改善</li><li>お問い合わせやご意見への対応</li><li>必要な場合の法的義務の履行</li></ul></section><section class="policy-card"><h2>第三者サービス</h2><p>一部の製品では、アプリストア、Steam、分析サービス、クラウド基盤など、第三者の配信・プラットフォームサービスを利用する場合があります。各サービスは、それぞれのプライバシー規約に基づいて情報を取り扱うことがあります。</p></section><section class="policy-card"><h2>子どものプライバシー</h2><p>本ウェブサイトを通じて、子どもの個人情報を意図的に取得することはありません。子どもが個人情報を提供した可能性がある場合は、確認と必要な削除のためにご連絡ください。</p></section><section class="policy-card"><h2>情報の保存期間</h2><p>サービスの提供、サポート上の問題解決、法的義務の履行、正当な利益の保護に合理的に必要な期間に限り、情報を保存します。</p></section><section class="policy-card"><h2>お客様の権利</h2><p>適用法令の範囲内で、お客様が提供した個人データの開示、訂正、削除を請求できます。</p></section><section class="policy-card"><h2>お問い合わせ</h2><p>プライバシーに関するご質問は、<a href="mailto:capoo@ifansstudio.com">capoo@ifansstudio.com</a> までご連絡ください。</p></section>`
  };

  const privacy = {
    en: {
      'meta.title': 'Privacy Policy | Infans Studio',
      'meta.description': 'Privacy policy for Infans Studio products and services.',
      'privacy.title': 'Privacy Policy',
      'privacy.hero': 'This page describes how Infans Studio handles information for its games and websites.',
      'privacy.main': privacyMain.en
    },
    'zh-CN': {
      'meta.title': '隐私政策 | Infans Studio',
      'meta.description': 'Infans Studio 产品与服务隐私政策。',
      'privacy.title': '隐私政策',
      'privacy.hero': '本页面说明 Infans Studio 如何在游戏与网站中处理信息。',
      'privacy.main': privacyMain['zh-CN']
    },
    ja: {
      'meta.title': 'プライバシーポリシー | Infans Studio',
      'meta.description': 'Infans Studio の製品とサービスに関するプライバシーポリシーです。',
      'privacy.title': 'プライバシーポリシー',
      'privacy.hero': 'Infans Studio がゲームとウェブサイトで情報をどのように取り扱うかを説明します。',
      'privacy.main': privacyMain.ja
    }
  };

  const pageDictionaries = { home, support, privacy };
  const dictionary = pageDictionaries[page] || home;
  let currentLanguage = 'en';

  const readStoredLanguage = () => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      return supportedLanguages.includes(stored) ? stored : 'en';
    } catch {
      return 'en';
    }
  };

  const translate = (key, language = currentLanguage) => (
    dictionary[language]?.[key]
    ?? common[language]?.[key]
    ?? dictionary.en?.[key]
    ?? common.en?.[key]
    ?? key
  );

  const applyLanguage = (language, persist = false) => {
    if (!supportedLanguages.includes(language)) language = 'en';
    currentLanguage = language;
    document.documentElement.lang = language;
    document.documentElement.dataset.locale = language;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      element.textContent = translate(element.dataset.i18n, language);
    });
    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      element.innerHTML = translate(element.dataset.i18nHtml, language);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      element.setAttribute('aria-label', translate(element.dataset.i18nAria, language));
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      element.setAttribute('alt', translate(element.dataset.i18nAlt, language));
    });

    const title = translate('meta.title', language);
    if (title !== 'meta.title') document.title = title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', translate('meta.description', language));
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && dictionary[language]?.['meta.ogDescription']) {
      ogDescription.setAttribute('content', translate('meta.ogDescription', language));
    }

    document.querySelectorAll('button[data-language]').forEach((button) => {
      const active = button.dataset.language === language;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('is-active', active);
    });

    if (persist) {
      try { window.localStorage.setItem(storageKey, language); } catch { /* local preference only */ }
    }

    window.dispatchEvent(new CustomEvent('infans:languagechange', { detail: { language } }));
  };

  document.querySelectorAll('button[data-language]').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.language, true));
  });

  window.InfansI18n = {
    get language() { return currentLanguage; },
    setLanguage: (language) => applyLanguage(language, true),
    t: (key) => translate(key)
  };

  applyLanguage(readStoredLanguage());
})();
