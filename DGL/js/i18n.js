/**
 * DGlobal i18n — Vietnamese · English · Korean · Lao
 * Usage: add data-i18n="key" to elements; call window.DGi18n.apply(lang)
 */
(function () {
  const STORAGE_KEY = 'dg_lang';
  const LANGS = ['vi', 'en', 'ko', 'lo'];
  const DEFAULT = 'vi';

  const T = {
    vi: {
      /* NAV */
      nav_home:        'Trang chủ',
      nav_solutions:   'Giải pháp',
      nav_products:    'Sản phẩm',
      nav_about:       'Về chúng tôi',
      nav_clients:     'Khách hàng',
      nav_feedback:    'Phản hồi',
      nav_careers:     'Tuyển dụng',
      nav_contact:     'Liên hệ ngay',
      nav_contact_link:'Liên hệ',

      /* HERO */
      hero_badge:      'Đối tác chuyển đổi số hàng đầu',
      hero_title:      'Giải pháp công nghệ<br /><span class="gradient-text">toàn diện cho</span><br />doanh nghiệp số',
      hero_sub:        'DGlobal cung cấp hệ sinh thái công nghệ tích hợp — từ ERP, viễn thông, ngân hàng số đến các giải pháp AI tiên tiến giúp doanh nghiệp bứt phá.',
      hero_cta1:       'Khám phá giải pháp',
      hero_cta2:       'Tìm hiểu thêm',

      /* STATS */
      stat_years:      'Năm kinh nghiệm',
      stat_clients:    'Doanh nghiệp tin dùng',
      stat_products:   'Sản phẩm & Dịch vụ',
      stat_uptime:     'Uptime SLA cam kết',

      /* SOLUTIONS */
      sol_label:       'Dịch vụ & Giải pháp',
      sol_title:       'Hệ sinh thái giải pháp<br />toàn diện',
      sol_subtitle:    'Mọi nhu cầu công nghệ của doanh nghiệp trong một nền tảng tích hợp, từ vận hành đến chuyển đổi số.',
      sol_viewall:     'Xem tất cả →',
      sol_learnmore:   'Tìm hiểu thêm',
      sol1_title:      'Giải pháp Doanh nghiệp',
      sol1_desc:       'ERP, CRM, workflow automation và tư vấn chuyển đổi số toàn diện cho doanh nghiệp lớn và vừa.',
      sol2_title:      'Dịch vụ Viễn thông',
      sol2_desc:       'VoIP, MVNO, hạ tầng viễn thông, SMS/OTP gateway — kết nối tin cậy cho mọi quy mô doanh nghiệp.',
      sol3_title:      'Ngân hàng Số',
      sol3_desc:       'Core banking, open banking APIs, mobile banking và KYC/eKYC — nền tảng tài chính số thế hệ mới.',
      sol4_title:      'Cổng Thanh toán',
      sol4_desc:       'Đa kênh thanh toán, QR Pay, BNPL và đối soát tự động — tích hợp nhanh, bảo mật cao, uptime 99.9%.',
      sol5_title:      'Thương mại Điện tử',
      sol5_desc:       'Nền tảng B2B/B2C, tích hợp marketplace và hệ thống loyalty — bán hàng đa kênh, tăng trưởng bền vững.',
      sol6_title:      'Giải pháp AI',
      sol6_desc:       'Chatbot, Callbot và bộ Agentic AI (Database, Report, ITS, KDB Agent) — tự động hóa thông minh, hiệu quả vượt trội.',

      /* AI SPOTLIGHT */
      ai_label:        'Giải pháp AI',
      ai_title:        'Sức mạnh AI <span style="color:var(--highlight)">Agentic</span><br />cho doanh nghiệp',
      ai_subtitle:     'Bộ sản phẩm AI thế hệ tiếp theo — không chỉ trả lời câu hỏi, mà còn hành động, phân tích và ra quyết định như một nhân viên thực sự.',
      ai_f1_title:     'Đa kênh tích hợp',
      ai_f1_desc:      'Web, Zalo, Facebook Messenger, điện thoại — một AI phục vụ mọi kênh liên lạc.',
      ai_f2_title:     'Tự học & Tối ưu liên tục',
      ai_f2_desc:      'Mô hình AI được fine-tune theo dữ liệu doanh nghiệp, cải thiện theo thời gian thực.',
      ai_f3_title:     'Bảo mật & On-premise',
      ai_f3_desc:      'Triển khai trên hạ tầng riêng của doanh nghiệp, dữ liệu không rời khỏi hệ thống.',
      ai_demo:         'Xem demo AI →',
      ai_p1_desc:      'AI hội thoại đa kênh cho chăm sóc khách hàng, bán hàng và HR — hiểu tiếng Việt tự nhiên, phản hồi tức thì 24/7.',
      ai_p2_desc:      'Bot giọng nói thay thế IVR, xử lý inbound/outbound tự động với NLP tiếng Việt.',
      ai_p3_desc:      'Truy vấn CSDL doanh nghiệp bằng ngôn ngữ tự nhiên, không cần viết SQL.',
      ai_p4_desc:      'Tự động tạo báo cáo kinh doanh và dashboard từ dữ liệu thô theo lệnh AI.',
      ai_p5_desc:      'Hỗ trợ IT thông minh: phân loại ticket, đề xuất giải pháp, tìm kiếm knowledge base.',
      ai_p6_desc:      'Quản lý tri thức nội bộ bằng AI — hỏi đáp tức thì từ tài liệu doanh nghiệp.',

      /* WHY */
      why_label:       'Tại sao chọn DGlobal',
      why_title:       'Cam kết vượt trội,<br />đồng hành dài lâu',
      why_subtitle:    'Chúng tôi không chỉ cung cấp phần mềm — chúng tôi đồng hành cùng sự phát triển của doanh nghiệp bạn.',
      why1_title:      'Bảo mật Cấp doanh nghiệp',
      why1_desc:       'ISO 27001, mã hóa end-to-end, audit log đầy đủ — hệ thống được thiết kế an toàn từ nền tảng.',
      why2_title:      'Hiệu năng Vượt trội',
      why2_desc:       'SLA 99.9% uptime, hạ tầng cloud-native, auto-scaling theo tải — không bao giờ gián đoạn kinh doanh.',
      why3_title:      'Hỗ trợ 24/7',
      why3_desc:       'Đội ngũ kỹ thuật sẵn sàng hỗ trợ mọi lúc — response time dưới 15 phút cho sự cố nghiêm trọng.',
      why4_title:      'Tích hợp Linh hoạt',
      why4_desc:       'API-first, hỗ trợ REST & GraphQL, tích hợp dễ dàng với hệ thống legacy — không phá vỡ quy trình hiện tại.',

      /* CLIENTS */
      clients_label:   'Khách hàng tin tưởng',
      clients_title:   'Được tin dùng bởi<br />các doanh nghiệp hàng đầu',
      clients_sub:     'Từ startups đến tập đoàn lớn — DGlobal là lựa chọn công nghệ của hàng trăm doanh nghiệp Việt Nam.',

      /* TESTIMONIALS */
      testi_label:     'Phản hồi khách hàng',
      testi_title:     'Khách hàng nói gì về<br />DGlobal',
      testi1_text:     'Hệ thống ERP của DGlobal giúp chúng tôi giảm 40% thời gian xử lý đơn hàng và tăng độ chính xác dữ liệu lên 99%. Đội ngũ hỗ trợ rất chuyên nghiệp và phản hồi nhanh chóng.',
      testi2_text:     'Chatbot AI của DGlobal xử lý hơn 10,000 yêu cầu/ngày tự động hoàn toàn. Tỷ lệ hài lòng của khách hàng tăng từ 72% lên 91% chỉ sau 3 tháng triển khai.',
      testi3_text:     'Cổng thanh toán của DGlobal tích hợp vào hệ thống của chúng tôi trong 2 tuần. Uptime 99.99%, hỗ trợ QR Pay và BNPL giúp doanh thu tăng 25% trong quý đầu.',
      testi4_text:     'DGlobal đã giúp Dagoras triển khai hệ thống AI Chatbot đa kênh trong thời gian kỷ lục. Chất lượng tư vấn và hỗ trợ kỹ thuật vượt trội, đội nhóm chuyên nghiệp và tận tâm. Chúng tôi hoàn toàn tin tưởng vào năng lực công nghệ của DGlobal.',
      testi5_text:     'Nền tảng e-learning tích hợp AI của DGlobal đã thay đổi hoàn toàn cách EduSmart vận hành. Hệ thống ổn định, tốc độ xử lý nhanh, và đội ngũ hỗ trợ luôn sẵn sàng 24/7. Đây là đối tác công nghệ lý tưởng cho doanh nghiệp giáo dục.',

      /* TELECOM PAGE */
      tc_breadcrumb:   'Viễn thông',
      tc_hero_title:   'Dịch vụ<br /><span style="color:var(--highlight)">Viễn thông</span><br />doanh nghiệp',
      tc_hero_sub:     'Các dịch vụ VAS, BSS, VoIP, eSim và hạ tầng viễn thông toàn diện — kết nối ổn định, bảo mật cao, chi phí tối ưu cho doanh nghiệp ở mọi quy mô.',
      tc_btn_demo:     'Liên hệ Demo',
      tc_btn_back:     '← Giải pháp khác',
      tc_stat_uptime:  'Uptime SLA cam kết',
      tc_stat_support: 'Hỗ trợ',
      tc_stat_otp:     'Tốc độ giao OTP',
      tc_stat_carrier: 'Nhà mạng tích hợp',
      tc_feat_label:   'Tính năng nổi bật',
      tc_feat_title:   'Hạ tầng viễn thông<br /><span style="color:var(--highlight)">thế hệ tiếp theo</span>',
      tc_feat_sub:     'Từ tổng đài VoIP đến SMS gateway và MVNO — một nền tảng duy nhất cho tất cả nhu cầu kết nối doanh nghiệp.',
      tc_feat1_title:  'VoIP & Tổng đài IP',
      tc_feat1_desc:   'Hệ thống tổng đài IP đầy đủ tính năng: IVR, ghi âm cuộc gọi, phân phối cuộc gọi thông minh. Tích hợp CRM và báo cáo real-time.',
      tc_feat2_title:  'MNO/MVO & SIM doanh nghiệp',
      tc_feat2_desc:   'Giải pháp VAS/BSS/ cho các Telco. Tùy chỉnh: SIM doanh nghiệp, quản lý thuê bao, kiểm soát cước và tích hợp IoT. Hỗ trợ eSIM và M2M.',
      tc_feat3_title:  'Voice Brandname',
      tc_feat3_desc:   'Gọi điện thoại hiển thị tên thương hiệu thay vì số thuê bao. Tăng nhận diện doanh nghiệp, nâng tỷ lệ bắt máy và xây dựng lòng tin với khách hàng.',
      tc_feat4_title:  'Quản lý/triển khai Private Cloud',
      tc_feat4_desc:   'Xây dựng và vận hành hạ tầng Private Cloud riêng cho doanh nghiệp — bảo mật dữ liệu tuyệt đối, hiệu suất cao, dễ mở rộng và tuân thủ các quy định pháp lý trong nước.',
      tc_feat5_title:  'SMS Gateway',
      tc_feat5_desc:   'Nền tảng SMS đa kênh: SMS marketing, thông báo giao dịch, OTP và SMS brandname. Tỷ lệ giao thành công >99%, tốc độ dưới 2 giây.',
      tc_feat6_title:  'OTP & Xác thực',
      tc_feat6_desc:   'Giải pháp OTP đa kênh: SMS, voice call, email và TOTP. Bảo mật 2FA cho ứng dụng ngân hàng, fintech và thương mại điện tử.',
      tc_uc_label:     'Ứng dụng thực tiễn',
      tc_uc_title:     'Ngành nào ứng dụng<br />nhiều nhất?',
      tc_uc_sub:       'Giải pháp viễn thông của DGlobal phục vụ đa dạng ngành nghề từ tài chính đến logistics.',
      tc_uc1_title:    'Ngân hàng & Tài chính',
      tc_uc1_desc:     'OTP xác thực giao dịch, SMS thông báo số dư, tổng đài CSKH và voice OTP cho khách hàng không dùng smartphone.',
      tc_uc2_title:    'Giao vận & Thương mại điện tử',
      tc_uc2_desc:     'SMS cập nhật trạng thái đơn hàng, Number Masking kết nối tài xế-khách hàng, tổng đài IP cho CSKH.',
      tc_uc3_title:    'Y tế & Bệnh viện',
      tc_uc3_desc:     'SMS nhắc lịch khám, OTP đặt lịch online, tổng đài tiếp nhận khẩn cấp và hệ thống thông báo nội bộ.',
      tc_uc4_title:    'Bán lẻ & Marketing',
      tc_uc4_desc:     'SMS marketing cá nhân hóa, thông báo khuyến mãi flash sale, nhắc giỏ hàng bỏ dở và loyalty points.',
      tc_testimonial:  '"Voice Brandname của DGlobal giúp tỷ lệ bắt máy của đội ngũ kinh doanh tăng hơn 40% chỉ sau 1 tháng triển khai. Khách hàng nhìn thấy tên công ty thay vì số lạ, tạo sự tin tưởng ngay từ đầu cuộc gọi. Dịch vụ ổn định, hỗ trợ kỹ thuật nhanh chóng và chuyên nghiệp."',
      tc_metric1:      'Tỷ lệ giao thành công',
      tc_metric2:      'Giảm chi phí',
      tc_proc_label:   'Triển khai nhanh chóng',
      tc_proc_title:   'Kết nối doanh nghiệp<br /><span style="color:var(--highlight)">trong 4 bước đơn giản</span>',
      tc_step1_title:  'Tư vấn & Lựa chọn',
      tc_step1_desc:   'Đánh giá nhu cầu kết nối, lưu lượng và ngân sách. Đề xuất gói dịch vụ tối ưu.',
      tc_step2_title:  'Cấp phép & Cấu hình',
      tc_step2_desc:   'Đăng ký brandname, cấu hình API, thiết lập số đầu mối và kiểm tra kết nối.',
      tc_step3_title:  'Tích hợp & Kiểm thử',
      tc_step3_desc:   'Tích hợp API vào hệ thống hiện có, kiểm thử toàn diện và xác nhận chất lượng.',
      tc_step4_title:  'Go-live & Giám sát',
      tc_step4_desc:   'Ra mắt chính thức với monitoring 24/7, dashboard real-time và hỗ trợ kỹ thuật liên tục.',
      tc_cta_label:    'Kết nối ngay hôm nay',
      tc_cta_title:    'Tối ưu hạ tầng<br /><span style="color:var(--highlight)">viễn thông doanh nghiệp?</span>',
      tc_cta_sub:      'Đặt lịch demo miễn phí — chuyên gia DGlobal sẽ tư vấn giải pháp phù hợp và cung cấp báo giá trong vòng 24 giờ.',
      tc_cta_btn:      'Liên hệ Demo ngay',
      tc_cta_call:     'Gọi: 0981 100 001',
      tc_modal_title:  'Đăng ký Demo miễn phí',
      tc_modal_sub:    'Điền thông tin, chuyên gia DGlobal sẽ liên hệ trong 24 giờ.',
      footer_col1:     'Giải pháp',
      footer_col2:     'Sản phẩm AI',
      footer_col3:     'Công ty',
      footer_about:    'Về DGlobal',
      form_name:       'Họ và tên',
      form_name_ph:    'Nguyễn Văn A',
      form_name_err:   'Vui lòng nhập họ và tên',
      form_phone:      'Số điện thoại',
      form_phone_ph:   '0912 345 678',
      form_phone_err:  'Vui lòng nhập số điện thoại hợp lệ',
      form_email:      'Email',
      form_email_ph:   'email@company.com',
      form_email_err:  'Vui lòng nhập địa chỉ email hợp lệ',
      form_msg:        'Nội dung liên hệ',
      form_msg_ph:     'Mô tả nhu cầu hoặc câu hỏi của bạn...',
      form_msg_err:    'Vui lòng nhập nội dung liên hệ',
      form_submit:     'Gửi thông tin',
      form_note:       'Thông tin của bạn được bảo mật tuyệt đối và chỉ dùng để liên hệ.',
      form_success_title: 'Gửi thành công!',
      form_success_desc:  'Cảm ơn bạn đã liên hệ. Đội ngũ DGlobal sẽ phản hồi trong vòng <strong style="color:var(--accent-hover)">24 giờ</strong> làm việc.',
      modal_close:     'Đóng',

      /* CTA */
      cta_label:       'Bắt đầu ngay hôm nay',
      cta_title:       'Sẵn sàng chuyển đổi<br /><span style="color:var(--accent-hover)">doanh nghiệp của bạn?</span>',
      cta_sub:         'Liên hệ với chuyên gia của chúng tôi để được tư vấn giải pháp phù hợp — hoàn toàn miễn phí.',
      cta_btn1:        'Liên hệ tư vấn miễn phí',
      cta_btn2:        'Gọi ngay: 0981 100 001',

      /* FOOTER */
      footer_desc:     'DGlobal Technology Joint Stock Company — Giải pháp công nghệ toàn diện cho doanh nghiệp số Việt Nam.',
      footer_sol:      'Giải pháp',
      footer_ai:       'Sản phẩm AI',
      footer_company:  'Công ty',
      footer_about:    'Về DGlobal',
      footer_customers:'Khách hàng',
      footer_careers:  'Tuyển dụng',
      footer_contact:  'Liên hệ',
      footer_privacy:  'Chính sách Bảo mật',
      footer_terms:    'Điều khoản Dịch vụ',
      footer_copy:     '© 2025 DGlobal Technology JSC. All rights reserved.',

      /* MODAL */
      modal_title:     'Liên hệ với chúng tôi',
      modal_sub:       'Điền thông tin bên dưới, chúng tôi sẽ phản hồi trong vòng 24 giờ.',
      modal_name:      'Họ và tên',
      modal_phone:     'Số điện thoại',
      modal_email:     'Email',
      modal_msg:       'Nội dung liên hệ',
      modal_ph_name:   'Nguyễn Văn A',
      modal_ph_phone:  '0912 345 678',
      modal_ph_email:  'email@company.com',
      modal_ph_msg:    'Mô tả nhu cầu hoặc câu hỏi của bạn...',
      modal_submit:    'Gửi thông tin',
      modal_note:      'Thông tin của bạn được bảo mật tuyệt đối và chỉ dùng để liên hệ.',
      modal_err_name:  'Vui lòng nhập họ và tên',
      modal_err_phone: 'Vui lòng nhập số điện thoại hợp lệ',
      modal_err_email: 'Vui lòng nhập địa chỉ email hợp lệ',
      modal_err_msg:   'Vui lòng nhập nội dung liên hệ',
      modal_success_title: 'Gửi thành công!',
      modal_success_desc:  'Cảm ơn bạn đã liên hệ. Đội ngũ DGlobal sẽ phản hồi trong vòng <strong style="color:var(--accent-hover)">24 giờ</strong> làm việc.',
      modal_close:     'Đóng',

      /* HOTLINE */
      hotline_label:   '📞 0981 100 001',

      /* CAREERS PAGE */
      career_hero_title:  'Cùng DGlobal <span>Kiến tạo Tương lai</span>',
      career_hero_sub:    'Chúng tôi đang tìm kiếm những tài năng xuất sắc để cùng nhau xây dựng các giải pháp công nghệ đột phá cho doanh nghiệp Việt Nam và khu vực.',
      career_jobs_label:  'Vị trí tuyển dụng',
      career_jobs_title:  'Cơ hội <span>Nghề nghiệp</span>',
      career_jobs_sub:    'DGlobal đang mở rộng đội ngũ với các vị trí hấp dẫn trong lĩnh vực công nghệ. Tất cả vị trí đều có cơ hội làm việc hybrid và lộ trình thăng tiến rõ ràng.',
      career_apply:       'Ứng tuyển',
      career_contact:     'Liên hệ',
      career_salary:      'Thỏa thuận · Cạnh tranh',
      career_why_label:   'Tại sao chọn DGlobal?',
      career_why_title:   'Môi trường <span>Phát triển</span>',
      career_process_label: 'Quy trình tuyển dụng',
      career_process_title: 'Từ hồ sơ đến <span>Offer Letter</span>',
      career_cta_title:   'Sẵn sàng tham gia <span style="background:linear-gradient(135deg,#2563EB,#06B6D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">đội ngũ DGlobal</span>?',
      career_cta_sub:     'Gửi CV ngay hôm nay và là một phần của hành trình số hóa doanh nghiệp Việt Nam cùng chúng tôi.',
      career_cta_btn:     'Ứng tuyển ngay',
      career_cta_email:   'Email HR trực tiếp',
    },

    en: {
      nav_home:        'Home',
      nav_solutions:   'Solutions',
      nav_products:    'Products',
      nav_about:       'About Us',
      nav_clients:     'Clients',
      nav_feedback:    'Testimonials',
      nav_careers:     'Careers',
      nav_contact:     'Contact Us',
      nav_contact_link:'Contact',

      hero_badge:      'Leading Digital Transformation Partner',
      hero_title:      'Comprehensive Technology<br /><span class="gradient-text">Solutions for</span><br />Digital Enterprises',
      hero_sub:        'DGlobal delivers an integrated technology ecosystem — from ERP, telecom, and digital banking to advanced AI solutions that drive business growth.',
      hero_cta1:       'Explore Solutions',
      hero_cta2:       'Learn More',

      stat_years:      'Years of Experience',
      stat_clients:    'Enterprise Clients',
      stat_products:   'Products & Services',
      stat_uptime:     'Uptime SLA Guaranteed',

      sol_label:       'Services & Solutions',
      sol_title:       'A Complete<br />Solution Ecosystem',
      sol_subtitle:    'Every enterprise technology need in one integrated platform — from operations to digital transformation.',
      sol_viewall:     'View All →',
      sol_learnmore:   'Learn More',
      sol1_title:      'Enterprise Solutions',
      sol1_desc:       'ERP, CRM, workflow automation and comprehensive digital transformation consulting for large and mid-sized enterprises.',
      sol2_title:      'Telecom Services',
      sol2_desc:       'VoIP, MVNO, telecom infrastructure, SMS/OTP gateway — reliable connectivity for businesses of every size.',
      sol3_title:      'Digital Banking',
      sol3_desc:       'Core banking, open banking APIs, mobile banking and KYC/eKYC — next-generation digital finance platform.',
      sol4_title:      'Payment Gateway',
      sol4_desc:       'Multi-channel payments, QR Pay, BNPL and auto-reconciliation — fast integration, high security, 99.9% uptime.',
      sol5_title:      'E-Commerce',
      sol5_desc:       'B2B/B2C platform, marketplace integration and loyalty systems — omnichannel sales, sustainable growth.',
      sol6_title:      'AI Solutions',
      sol6_desc:       'Chatbot, Callbot and Agentic AI suite (Database, Report, ITS, KDB Agent) — intelligent automation, outstanding efficiency.',

      ai_label:        'AI Solutions',
      ai_title:        'The Power of <span style="color:var(--highlight)">Agentic</span> AI<br />for Enterprises',
      ai_subtitle:     'Next-generation AI products — not just answering questions, but acting, analyzing and making decisions like a real employee.',
      ai_f1_title:     'Omnichannel Integration',
      ai_f1_desc:      'Web, Zalo, Facebook Messenger, phone — one AI serving every communication channel.',
      ai_f2_title:     'Self-Learning & Continuous Optimization',
      ai_f2_desc:      'AI models fine-tuned on enterprise data, improving in real time.',
      ai_f3_title:     'Security & On-Premise',
      ai_f3_desc:      'Deployed on the enterprise\'s own infrastructure — data never leaves your system.',
      ai_demo:         'View AI Demo →',
      ai_p1_desc:      'Omnichannel conversational AI for customer care, sales and HR — natural language understanding, instant 24/7 responses.',
      ai_p2_desc:      'Voice bot replacing IVR, handling inbound/outbound calls automatically with NLP.',
      ai_p3_desc:      'Query enterprise databases in natural language — no SQL required.',
      ai_p4_desc:      'Automatically generate business reports and dashboards from raw data via AI commands.',
      ai_p5_desc:      'Intelligent IT support: ticket triage, solution suggestions, knowledge base search.',
      ai_p6_desc:      'AI-powered internal knowledge management — instant Q&A from enterprise documents.',

      why_label:       'Why Choose DGlobal',
      why_title:       'Outstanding Commitment,<br />Long-term Partnership',
      why_subtitle:    'We don\'t just provide software — we grow alongside your business.',
      why1_title:      'Enterprise-Grade Security',
      why1_desc:       'ISO 27001, end-to-end encryption, full audit logs — systems designed secure from the ground up.',
      why2_title:      'Superior Performance',
      why2_desc:       '99.9% uptime SLA, cloud-native infrastructure, auto-scaling — zero business disruption.',
      why3_title:      '24/7 Support',
      why3_desc:       'Technical team ready at all times — response time under 15 minutes for critical incidents.',
      why4_title:      'Flexible Integration',
      why4_desc:       'API-first, REST & GraphQL support, easy integration with legacy systems — no disruption to existing processes.',

      clients_label:   'Trusted by Clients',
      clients_title:   'Trusted by Leading<br />Enterprises',
      clients_sub:     'From startups to large corporations — DGlobal is the technology partner of choice for hundreds of businesses.',

      testi_label:     'Client Feedback',
      testi_title:     'What Our Clients Say<br />About DGlobal',
      testi1_text:     'DGlobal\'s ERP system helped us reduce order processing time by 40% and increase data accuracy to 99%. The support team is highly professional and responds quickly.',
      testi2_text:     'DGlobal\'s AI Chatbot handles over 10,000 requests/day fully automatically. Customer satisfaction rose from 72% to 91% within just 3 months of deployment.',
      testi3_text:     'DGlobal\'s payment gateway integrated into our system in 2 weeks. 99.99% uptime, QR Pay and BNPL support drove 25% revenue growth in the first quarter.',
      testi4_text:     'DGlobal helped Dagoras deploy a multi-channel AI Chatbot system in record time. Outstanding consulting and technical support — a professional and dedicated team. We fully trust DGlobal\'s technological capabilities.',
      testi5_text:     'DGlobal\'s AI-integrated e-learning platform completely transformed how EduSmart operates. Stable system, fast processing, and 24/7 support team always ready. This is the ideal technology partner for education businesses.',

      /* TELECOM PAGE */
      tc_breadcrumb:   'Telecom',
      tc_hero_title:   'Enterprise<br /><span style="color:var(--highlight)">Telecom</span><br />Services',
      tc_hero_sub:     'Comprehensive VAS, BSS, VoIP, eSIM services and telecom infrastructure — stable connectivity, high security, and optimized costs for businesses of every scale.',
      tc_btn_demo:     'Contact for Demo',
      tc_btn_back:     '← Other Solutions',
      tc_stat_uptime:  'Uptime SLA Guaranteed',
      tc_stat_support: 'Support',
      tc_stat_otp:     'OTP Delivery Speed',
      tc_stat_carrier: 'Carriers Integrated',
      tc_feat_label:   'Key Features',
      tc_feat_title:   'Next-Generation<br /><span style="color:var(--highlight)">Telecom Infrastructure</span>',
      tc_feat_sub:     'From VoIP PBX to SMS gateway and MVNO — a single platform for all enterprise connectivity needs.',
      tc_feat1_title:  'VoIP & IP PBX',
      tc_feat1_desc:   'Full-featured IP PBX: IVR, call recording, intelligent call routing. CRM integration and real-time reporting.',
      tc_feat2_title:  'MNO/MVO & Enterprise SIM',
      tc_feat2_desc:   'VAS/BSS solutions for Telcos. Custom: enterprise SIM, subscription management, billing control and IoT integration. Supports eSIM and M2M.',
      tc_feat3_title:  'Voice Brandname',
      tc_feat3_desc:   'Display your brand name instead of a phone number on outgoing calls. Increase brand recognition, improve answer rates and build customer trust.',
      tc_feat4_title:  'Private Cloud Management & Deployment',
      tc_feat4_desc:   'Build and operate dedicated Private Cloud infrastructure for your enterprise — absolute data security, high performance, easy scalability and full regulatory compliance.',
      tc_feat5_title:  'SMS Gateway',
      tc_feat5_desc:   'Multi-channel SMS platform: SMS marketing, transaction alerts, OTP and SMS brandname. >99% delivery rate, under 2 seconds.',
      tc_feat6_title:  'OTP & Authentication',
      tc_feat6_desc:   'Multi-channel OTP: SMS, voice call, email and TOTP. 2FA security for banking, fintech and e-commerce applications.',
      tc_uc_label:     'Real-World Applications',
      tc_uc_title:     'Which Industries<br />Benefit Most?',
      tc_uc_sub:       'DGlobal\'s telecom solutions serve diverse industries from finance to logistics.',
      tc_uc1_title:    'Banking & Finance',
      tc_uc1_desc:     'Transaction OTP, balance notifications via SMS, customer service PBX and voice OTP for non-smartphone users.',
      tc_uc2_title:    'Logistics & E-Commerce',
      tc_uc2_desc:     'SMS order status updates, Number Masking connecting drivers and customers, IP PBX for customer service.',
      tc_uc3_title:    'Healthcare & Hospitals',
      tc_uc3_desc:     'SMS appointment reminders, online booking OTP, emergency hotline and internal notification systems.',
      tc_uc4_title:    'Retail & Marketing',
      tc_uc4_desc:     'Personalized SMS marketing, flash sale promotions, abandoned cart reminders and loyalty points notifications.',
      tc_testimonial:  '"DGlobal\'s Voice Brandname increased our sales team\'s answer rate by over 40% within just 1 month of deployment. Customers see the company name instead of an unknown number, building trust from the very first call. Stable service with fast and professional technical support."',
      tc_metric1:      'Delivery Success Rate',
      tc_metric2:      'Cost Reduction',
      tc_proc_label:   'Fast Deployment',
      tc_proc_title:   'Connect Your Business<br /><span style="color:var(--highlight)">in 4 Simple Steps</span>',
      tc_step1_title:  'Consult & Choose',
      tc_step1_desc:   'Assess connectivity needs, traffic volume and budget. Recommend the optimal service package.',
      tc_step2_title:  'License & Configure',
      tc_step2_desc:   'Register brandname, configure API, set up contact numbers and verify connection.',
      tc_step3_title:  'Integrate & Test',
      tc_step3_desc:   'Integrate API into existing systems, comprehensive testing and quality verification.',
      tc_step4_title:  'Go-live & Monitor',
      tc_step4_desc:   'Official launch with 24/7 monitoring, real-time dashboard and continuous technical support.',
      tc_cta_label:    'Connect Today',
      tc_cta_title:    'Optimize Your<br /><span style="color:var(--highlight)">Enterprise Telecom?</span>',
      tc_cta_sub:      'Schedule a free demo — DGlobal experts will provide tailored solution advice and a quote within 24 hours.',
      tc_cta_btn:      'Contact for Demo',
      tc_cta_call:     'Call: 0981 100 001',
      tc_modal_title:  'Register for Free Demo',
      tc_modal_sub:    'Fill in your details and a DGlobal expert will contact you within 24 hours.',
      footer_col1:     'Solutions',
      footer_col2:     'AI Products',
      footer_col3:     'Company',
      footer_about:    'About DGlobal',
      form_name:       'Full Name',
      form_name_ph:    'John Smith',
      form_name_err:   'Please enter your full name',
      form_phone:      'Phone Number',
      form_phone_ph:   '+84 912 345 678',
      form_phone_err:  'Please enter a valid phone number',
      form_email:      'Email',
      form_email_ph:   'email@company.com',
      form_email_err:  'Please enter a valid email address',
      form_msg:        'Message',
      form_msg_ph:     'Describe your needs or questions...',
      form_msg_err:    'Please enter your message',
      form_submit:     'Send Message',
      form_note:       'Your information is kept strictly confidential and used only for contact purposes.',
      form_success_title: 'Sent Successfully!',
      form_success_desc:  'Thank you for contacting us. The DGlobal team will respond within <strong style="color:var(--accent-hover)">24 hours</strong>.',
      modal_close:     'Close',

      cta_label:       'Get Started Today',
      cta_title:       'Ready to Transform<br /><span style="color:var(--accent-hover)">Your Business?</span>',
      cta_sub:         'Contact our experts for a tailored solution consultation — completely free of charge.',
      cta_btn1:        'Free Consultation',
      cta_btn2:        'Call Now: 0981 100 001',

      footer_desc:     'DGlobal Technology Joint Stock Company — Comprehensive technology solutions for digital enterprises.',
      footer_sol:      'Solutions',
      footer_ai:       'AI Products',
      footer_company:  'Company',
      footer_about:    'About DGlobal',
      footer_customers:'Clients',
      footer_careers:  'Careers',
      footer_contact:  'Contact',
      footer_privacy:  'Privacy Policy',
      footer_terms:    'Terms of Service',
      footer_copy:     '© 2025 DGlobal Technology JSC. All rights reserved.',

      modal_title:     'Contact Us',
      modal_sub:       'Fill in the form below and we\'ll respond within 24 hours.',
      modal_name:      'Full Name',
      modal_phone:     'Phone Number',
      modal_email:     'Email',
      modal_msg:       'Message',
      modal_ph_name:   'John Doe',
      modal_ph_phone:  '+84 912 345 678',
      modal_ph_email:  'email@company.com',
      modal_ph_msg:    'Describe your needs or questions...',
      modal_submit:    'Send Message',
      modal_note:      'Your information is kept strictly confidential and used only for contact purposes.',
      modal_err_name:  'Please enter your full name',
      modal_err_phone: 'Please enter a valid phone number',
      modal_err_email: 'Please enter a valid email address',
      modal_err_msg:   'Please enter your message',
      modal_success_title: 'Message Sent!',
      modal_success_desc:  'Thank you for reaching out. DGlobal\'s team will respond within <strong style="color:var(--accent-hover)">24 hours</strong>.',
      modal_close:     'Close',

      hotline_label:   '📞 0981 100 001',

      career_hero_title:  'Build the Future <span>with DGlobal</span>',
      career_hero_sub:    'We are looking for talented individuals to join us in building breakthrough technology solutions for enterprises in Vietnam and the region.',
      career_jobs_label:  'Open Positions',
      career_jobs_title:  'Career <span>Opportunities</span>',
      career_jobs_sub:    'DGlobal is expanding its team with exciting roles in technology. All positions offer hybrid work and clear career progression.',
      career_apply:       'Apply Now',
      career_contact:     'Contact Us',
      career_salary:      'Negotiable · Competitive',
      career_why_label:   'Why DGlobal?',
      career_why_title:   'A <span>Growth</span> Environment',
      career_process_label: 'Hiring Process',
      career_process_title: 'From Application to <span>Offer Letter</span>',
      career_cta_title:   'Ready to join the <span style="background:linear-gradient(135deg,#2563EB,#06B6D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">DGlobal Team</span>?',
      career_cta_sub:     'Send your CV today and be part of Vietnam\'s digital transformation journey with us.',
      career_cta_btn:     'Apply Now',
      career_cta_email:   'Email HR Directly',
    },

    ko: {
      nav_home:        '홈',
      nav_solutions:   '솔루션',
      nav_products:    '제품',
      nav_about:       '회사 소개',
      nav_clients:     '고객사',
      nav_feedback:    '후기',
      nav_careers:     '채용',
      nav_contact:     '문의하기',
      nav_contact_link:'연락처',

      hero_badge:      '디지털 전환 선도 파트너',
      hero_title:      '디지털 기업을 위한<br /><span class="gradient-text">종합 기술</span><br />솔루션',
      hero_sub:        'DGlobal은 ERP, 통신, 디지털 뱅킹부터 첨단 AI 솔루션까지 통합된 기술 생태계를 제공하여 기업 성장을 지원합니다.',
      hero_cta1:       '솔루션 탐색',
      hero_cta2:       '자세히 보기',

      stat_years:      '년 경험',
      stat_clients:    '기업 고객',
      stat_products:   '제품 및 서비스',
      stat_uptime:     '업타임 SLA 보장',

      sol_label:       '서비스 & 솔루션',
      sol_title:       '완전한 솔루션<br />생태계',
      sol_subtitle:    '운영부터 디지털 전환까지 하나의 통합 플랫폼에서 모든 기업 기술 요구 사항을 해결합니다.',
      sol_viewall:     '전체 보기 →',
      sol_learnmore:   '자세히 보기',
      sol1_title:      '엔터프라이즈 솔루션',
      sol1_desc:       '대기업 및 중견기업을 위한 ERP, CRM, 워크플로우 자동화 및 디지털 전환 컨설팅.',
      sol2_title:      '통신 서비스',
      sol2_desc:       'VoIP, MVNO, 통신 인프라, SMS/OTP 게이트웨이 — 모든 규모의 기업에 신뢰할 수 있는 연결.',
      sol3_title:      '디지털 뱅킹',
      sol3_desc:       '코어 뱅킹, 오픈 뱅킹 API, 모바일 뱅킹, KYC/eKYC — 차세대 디지털 금융 플랫폼.',
      sol4_title:      '결제 게이트웨이',
      sol4_desc:       '멀티채널 결제, QR Pay, BNPL 및 자동 정산 — 빠른 통합, 높은 보안, 99.9% 업타임.',
      sol5_title:      '전자상거래',
      sol5_desc:       'B2B/B2C 플랫폼, 마켓플레이스 연동, 로열티 시스템 — 옴니채널 판매, 지속 가능한 성장.',
      sol6_title:      'AI 솔루션',
      sol6_desc:       '챗봇, 콜봇 및 에이전틱 AI 제품군 (Database, Report, ITS, KDB Agent) — 지능형 자동화, 탁월한 효율성.',

      ai_label:        'AI 솔루션',
      ai_title:        '기업을 위한 <span style="color:var(--highlight)">에이전틱</span> AI<br />의 힘',
      ai_subtitle:     '차세대 AI 제품 — 질문에 답하는 것에 그치지 않고, 실제 직원처럼 행동하고 분석하며 의사 결정을 내립니다.',
      ai_f1_title:     '옴니채널 통합',
      ai_f1_desc:      '웹, Zalo, Facebook Messenger, 전화 — 모든 커뮤니케이션 채널을 하나의 AI로 지원.',
      ai_f2_title:     '자기 학습 & 지속적 최적화',
      ai_f2_desc:      '기업 데이터로 파인튜닝된 AI 모델, 실시간 개선.',
      ai_f3_title:     '보안 & 온프레미스',
      ai_f3_desc:      '기업 자체 인프라에 배포 — 데이터가 시스템을 벗어나지 않습니다.',
      ai_demo:         'AI 데모 보기 →',
      ai_p1_desc:      '고객 지원, 영업, HR을 위한 옴니채널 대화형 AI — 자연어 이해, 24/7 즉시 응답.',
      ai_p2_desc:      'IVR을 대체하는 음성 봇, NLP로 인바운드/아웃바운드 통화를 자동 처리.',
      ai_p3_desc:      'SQL 없이 자연어로 기업 데이터베이스 조회.',
      ai_p4_desc:      'AI 명령으로 원시 데이터에서 비즈니스 보고서 및 대시보드 자동 생성.',
      ai_p5_desc:      '지능형 IT 지원: 티켓 분류, 솔루션 제안, 지식 베이스 검색.',
      ai_p6_desc:      'AI 기반 내부 지식 관리 — 기업 문서에서 즉각적인 Q&A.',

      why_label:       'DGlobal을 선택하는 이유',
      why_title:       '탁월한 약속,<br />장기적인 파트너십',
      why_subtitle:    '우리는 소프트웨어만 제공하지 않습니다 — 귀사의 성장과 함께합니다.',
      why1_title:      '엔터프라이즈급 보안',
      why1_desc:       'ISO 27001, 엔드투엔드 암호화, 완전한 감사 로그 — 기반부터 안전하게 설계된 시스템.',
      why2_title:      '탁월한 성능',
      why2_desc:       '99.9% 업타임 SLA, 클라우드 네이티브 인프라, 자동 스케일링 — 비즈니스 중단 없음.',
      why3_title:      '24/7 지원',
      why3_desc:       '언제든지 대기 중인 기술 팀 — 심각한 장애 시 15분 이내 응답.',
      why4_title:      '유연한 통합',
      why4_desc:       'API 우선, REST & GraphQL 지원, 레거시 시스템과 쉬운 통합 — 기존 프로세스 방해 없음.',

      clients_label:   '신뢰하는 고객사',
      clients_title:   '주요 기업들이<br />선택한 파트너',
      clients_sub:     '스타트업부터 대기업까지 — DGlobal은 수백 개 기업의 기술 파트너입니다.',

      testi_label:     '고객 후기',
      testi_title:     'DGlobal에 대한<br />고객의 말',
      testi1_text:     'DGlobal의 ERP 시스템 덕분에 주문 처리 시간이 40% 단축되고 데이터 정확도가 99%까지 향상되었습니다. 지원팀은 매우 전문적이고 신속하게 응답합니다.',
      testi2_text:     'DGlobal의 AI 챗봇이 하루 10,000건 이상의 요청을 완전 자동으로 처리합니다. 배포 후 3개월 만에 고객 만족도가 72%에서 91%로 상승했습니다.',
      testi3_text:     'DGlobal의 결제 게이트웨이는 2주 만에 시스템에 통합되었습니다. 99.99% 업타임, QR Pay 및 BNPL 지원으로 첫 분기에 매출이 25% 증가했습니다.',
      testi4_text:     'DGlobal은 Dagoras가 기록적인 시간 내에 멀티채널 AI 챗봇 시스템을 구축하도록 도왔습니다. 탁월한 컨설팅과 기술 지원, 전문적이고 헌신적인 팀. DGlobal의 기술 역량을 전적으로 신뢰합니다.',
      testi5_text:     'DGlobal의 AI 통합 이러닝 플랫폼이 EduSmart의 운영 방식을 완전히 바꾸었습니다. 안정적인 시스템, 빠른 처리 속도, 24/7 지원팀. 교육 기업에 이상적인 기술 파트너입니다.',

      /* TELECOM PAGE */
      tc_breadcrumb:   '통신 서비스',
      tc_hero_title:   '기업용<br /><span style="color:var(--highlight)">통신 서비스</span>',
      tc_hero_sub:     '종합 VAS, BSS, VoIP, eSIM 서비스 및 통신 인프라 — 안정적인 연결, 높은 보안, 모든 규모의 기업을 위한 최적화된 비용.',
      tc_btn_demo:     '데모 문의',
      tc_btn_back:     '← 다른 솔루션',
      tc_stat_uptime:  'Uptime SLA 보장',
      tc_stat_support: '지원',
      tc_stat_otp:     'OTP 전송 속도',
      tc_stat_carrier: '통신사 연동',
      tc_feat_label:   '주요 기능',
      tc_feat_title:   '차세대<br /><span style="color:var(--highlight)">통신 인프라</span>',
      tc_feat_sub:     'VoIP PBX부터 SMS 게이트웨이, MVNO까지 — 모든 기업 연결 요구를 위한 단일 플랫폼.',
      tc_feat1_title:  'VoIP & IP PBX',
      tc_feat1_desc:   '완전한 기능의 IP PBX: IVR, 통화 녹음, 지능형 통화 라우팅. CRM 통합 및 실시간 보고.',
      tc_feat2_title:  'MNO/MVO & 기업 SIM',
      tc_feat2_desc:   '통신사를 위한 VAS/BSS 솔루션. 맞춤형: 기업 SIM, 가입자 관리, 요금 제어 및 IoT 통합. eSIM 및 M2M 지원.',
      tc_feat3_title:  'Voice Brandname',
      tc_feat3_desc:   '발신 전화에 전화번호 대신 브랜드 이름을 표시합니다. 브랜드 인지도 향상, 통화 수락률 개선, 고객 신뢰 구축.',
      tc_feat4_title:  'Private Cloud 관리/구축',
      tc_feat4_desc:   '기업 전용 Private Cloud 인프라 구축 및 운영 — 완벽한 데이터 보안, 고성능, 손쉬운 확장성, 법적 규정 완전 준수.',
      tc_feat5_title:  'SMS 게이트웨이',
      tc_feat5_desc:   '멀티채널 SMS 플랫폼: SMS 마케팅, 거래 알림, OTP 및 SMS 브랜드명. 99% 이상 전송 성공률, 2초 이내.',
      tc_feat6_title:  'OTP & 인증',
      tc_feat6_desc:   '멀티채널 OTP: SMS, 음성 통화, 이메일 및 TOTP. 뱅킹, 핀테크, 전자상거래 앱을 위한 2FA 보안.',
      tc_uc_label:     '실제 적용 사례',
      tc_uc_title:     '어떤 산업에서<br />가장 많이 활용하나요?',
      tc_uc_sub:       'DGlobal의 통신 솔루션은 금융부터 물류까지 다양한 산업을 지원합니다.',
      tc_uc1_title:    '은행 & 금융',
      tc_uc1_desc:     '거래 OTP, SMS 잔액 알림, 고객 서비스 PBX, 비스마트폰 사용자를 위한 음성 OTP.',
      tc_uc2_title:    '물류 & 전자상거래',
      tc_uc2_desc:     'SMS 주문 상태 업데이트, 기사-고객 연결을 위한 Number Masking, 고객 서비스 IP PBX.',
      tc_uc3_title:    '의료 & 병원',
      tc_uc3_desc:     'SMS 예약 알림, 온라인 예약 OTP, 응급 핫라인 및 내부 알림 시스템.',
      tc_uc4_title:    '소매 & 마케팅',
      tc_uc4_desc:     '개인화 SMS 마케팅, 플래시 세일 프로모션, 장바구니 알림 및 포인트 적립 알림.',
      tc_testimonial:  '"DGlobal의 Voice Brandname으로 영업팀 통화 수락률이 배포 1개월 만에 40% 이상 증가했습니다. 고객이 낯선 번호 대신 회사명을 보고 첫 통화부터 신뢰감을 느낍니다. 안정적인 서비스와 빠르고 전문적인 기술 지원."',
      tc_metric1:      '전송 성공률',
      tc_metric2:      '비용 절감',
      tc_proc_label:   '빠른 배포',
      tc_proc_title:   '기업 연결<br /><span style="color:var(--highlight)">4단계로 간단하게</span>',
      tc_step1_title:  '상담 & 선택',
      tc_step1_desc:   '연결 요구사항, 트래픽 및 예산 평가. 최적의 서비스 패키지 추천.',
      tc_step2_title:  '라이선스 & 설정',
      tc_step2_desc:   '브랜드명 등록, API 설정, 연락처 번호 설정 및 연결 확인.',
      tc_step3_title:  '통합 & 테스트',
      tc_step3_desc:   '기존 시스템에 API 통합, 종합 테스트 및 품질 검증.',
      tc_step4_title:  '출시 & 모니터링',
      tc_step4_desc:   '24/7 모니터링, 실시간 대시보드 및 지속적인 기술 지원으로 공식 출시.',
      tc_cta_label:    '지금 연결하세요',
      tc_cta_title:    '기업 통신 인프라를<br /><span style="color:var(--highlight)">최적화하고 싶으신가요?</span>',
      tc_cta_sub:      '무료 데모 예약 — DGlobal 전문가가 맞춤형 솔루션을 안내하고 24시간 내 견적을 제공합니다.',
      tc_cta_btn:      '데모 문의하기',
      tc_cta_call:     '전화: 0981 100 001',
      tc_modal_title:  '무료 데모 신청',
      tc_modal_sub:    '정보를 입력하시면 DGlobal 전문가가 24시간 내 연락드립니다.',
      footer_col1:     '솔루션',
      footer_col2:     'AI 제품',
      footer_col3:     '회사',
      footer_about:    'DGlobal 소개',
      form_name:       '성명',
      form_name_ph:    '홍길동',
      form_name_err:   '성명을 입력해 주세요',
      form_phone:      '전화번호',
      form_phone_ph:   '+82 10 1234 5678',
      form_phone_err:  '유효한 전화번호를 입력해 주세요',
      form_email:      '이메일',
      form_email_ph:   'email@company.com',
      form_email_err:  '유효한 이메일 주소를 입력해 주세요',
      form_msg:        '문의 내용',
      form_msg_ph:     '필요 사항이나 질문을 설명해 주세요...',
      form_msg_err:    '문의 내용을 입력해 주세요',
      form_submit:     '보내기',
      form_note:       '귀하의 정보는 철저히 보호되며 연락 목적으로만 사용됩니다.',
      form_success_title: '전송 완료!',
      form_success_desc:  '문의해 주셔서 감사합니다. DGlobal 팀이 <strong style="color:var(--accent-hover)">24시간</strong> 내에 답변드립니다.',
      modal_close:     '닫기',

      cta_label:       '지금 시작하세요',
      cta_title:       '비즈니스를 변환할<br /><span style="color:var(--accent-hover)">준비가 되셨나요?</span>',
      cta_sub:         '전문가에게 무료 솔루션 컨설팅을 받아보세요.',
      cta_btn1:        '무료 상담 신청',
      cta_btn2:        '전화: 0981 100 001',

      footer_desc:     'DGlobal Technology Joint Stock Company — 디지털 기업을 위한 종합 기술 솔루션.',
      footer_sol:      '솔루션',
      footer_ai:       'AI 제품',
      footer_company:  '회사',
      footer_about:    'DGlobal 소개',
      footer_customers:'고객사',
      footer_careers:  '채용',
      footer_contact:  '문의',
      footer_privacy:  '개인정보 처리방침',
      footer_terms:    '이용약관',
      footer_copy:     '© 2025 DGlobal Technology JSC. All rights reserved.',

      modal_title:     '문의하기',
      modal_sub:       '아래 양식을 작성해 주시면 24시간 내에 답변 드리겠습니다.',
      modal_name:      '성함',
      modal_phone:     '전화번호',
      modal_email:     '이메일',
      modal_msg:       '문의 내용',
      modal_ph_name:   '홍길동',
      modal_ph_phone:  '+82 10-1234-5678',
      modal_ph_email:  'email@company.com',
      modal_ph_msg:    '필요 사항이나 질문을 입력해 주세요...',
      modal_submit:    '보내기',
      modal_note:      '귀하의 정보는 철저히 보호되며 연락 목적으로만 사용됩니다.',
      modal_err_name:  '성함을 입력해 주세요',
      modal_err_phone: '올바른 전화번호를 입력해 주세요',
      modal_err_email: '올바른 이메일 주소를 입력해 주세요',
      modal_err_msg:   '문의 내용을 입력해 주세요',
      modal_success_title: '전송 완료!',
      modal_success_desc:  '문의해 주셔서 감사합니다. DGlobal 팀이 <strong style="color:var(--accent-hover)">24시간</strong> 내에 답변 드리겠습니다.',
      modal_close:     '닫기',

      hotline_label:   '📞 0981 100 001',

      career_hero_title:  'DGlobal과 함께 <span>미래를 만들어가세요</span>',
      career_hero_sub:    '베트남과 지역 기업을 위한 혁신적인 기술 솔루션을 함께 구축할 뛰어난 인재를 찾고 있습니다.',
      career_jobs_label:  '채용 공고',
      career_jobs_title:  '커리어 <span>기회</span>',
      career_jobs_sub:    'DGlobal은 기술 분야의 매력적인 직책으로 팀을 확장하고 있습니다.',
      career_apply:       '지원하기',
      career_contact:     '문의하기',
      career_salary:      '협의 가능 · 경쟁력 있는 연봉',
      career_why_label:   'DGlobal을 선택하는 이유',
      career_why_title:   '<span>성장</span> 환경',
      career_process_label: '채용 절차',
      career_process_title: '지원서부터 <span>오퍼레터</span>까지',
      career_cta_title:   '<span style="background:linear-gradient(135deg,#2563EB,#06B6D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">DGlobal 팀</span>에 합류할 준비가 되셨나요?',
      career_cta_sub:     '지금 CV를 보내고 베트남 디지털 전환 여정에 동참하세요.',
      career_cta_btn:     '지금 지원하기',
      career_cta_email:   'HR 직접 이메일',
    },

    lo: {
      nav_home:        'ໜ້າຫຼັກ',
      nav_solutions:   'ວິທີແກ້ໄຂ',
      nav_products:    'ຜະລິດຕະພັນ',
      nav_about:       'ກ່ຽວກັບເຮົາ',
      nav_clients:     'ລູກຄ້າ',
      nav_feedback:    'ຄຳຕິຊົມ',
      nav_careers:     'ຮັບສະໝັກ',
      nav_contact:     'ຕິດຕໍ່ພວກເຮົາ',
      nav_contact_link:'ຕິດຕໍ່',

      hero_badge:      'ຄູ່ຮ່ວມການຫັນເປັນດິຈິຕອນຊັ້ນນຳ',
      hero_title:      'ວິທີແກ້ໄຂດ້ານເທັກໂນໂລຊີ<br /><span class="gradient-text">ຄົບວົງຈອນ</span><br />ສຳລັບທຸລະກິດດິຈິຕອນ',
      hero_sub:        'DGlobal ສະໜອງລະບົບນິເວດດ້ານເທັກໂນໂລຊີແບບປະສົມປະສານ — ຕັ້ງແຕ່ ERP, ໂທລະຄົມ, ທະນາຄານດິຈິຕອນ ຈົນຮອດ AI ຊັ້ນສູງ ຊ່ວຍໃຫ້ທຸລະກິດຂອງທ່ານຂະຫຍາຍຕົວ.',
      hero_cta1:       'ສຳຫຼວດວິທີແກ້ໄຂ',
      hero_cta2:       'ຮຽນຮູ້ເພີ່ມເຕີມ',

      stat_years:      'ປີ ປະສົບການ',
      stat_clients:    'ກິດຈະການທີ່ໄວ້ວາງໃຈ',
      stat_products:   'ຜະລິດຕະພັນ & ບໍລິການ',
      stat_uptime:     'ຮັບປະກັນ Uptime SLA',

      sol_label:       'ບໍລິການ & ວິທີແກ້ໄຂ',
      sol_title:       'ລະບົບນິເວດ<br />ວິທີແກ້ໄຂຄົບວົງຈອນ',
      sol_subtitle:    'ທຸກຄວາມຕ້ອງການດ້ານເທັກໂນໂລຊີໃນທຸລະກິດດ້ວຍລະບົບດຽວ — ຕັ້ງແຕ່ການດຳເນີນງານ ຈົນຮອດການຫັນເປັນດິຈິຕອນ.',
      sol_viewall:     'ເບິ່ງທັງໝົດ →',
      sol_learnmore:   'ຮຽນຮູ້ເພີ່ມເຕີມ',
      sol1_title:      'ວິທີແກ້ໄຂສຳລັບກິດຈະການ',
      sol1_desc:       'ERP, CRM, ລະບົບ workflow ອັດຕະໂນມັດ ແລະ ທີ່ປຶກສາການຫັນເປັນດິຈິຕອນ ສຳລັບກິດຈະການຂະໜາດໃຫຍ່ ແລະ ກາງ.',
      sol2_title:      'ບໍລິການໂທລະຄົມ',
      sol2_desc:       'VoIP, MVNO, ໂຄງສ້າງພື້ນຖານໂທລະຄົມ, SMS/OTP gateway — ການເຊື່ອມຕໍ່ທີ່ເຊື່ອຖືໄດ້.',
      sol3_title:      'ທະນາຄານດິຈິຕອນ',
      sol3_desc:       'Core banking, Open Banking APIs, Mobile Banking ແລະ KYC/eKYC — ລະບົບການເງິນດິຈິຕອນຍຸກໃໝ່.',
      sol4_title:      'ຊ່ອງທາງການຊຳລະເງິນ',
      sol4_desc:       'ການຊຳລະຫຼາຍຊ່ອງທາງ, QR Pay, BNPL ແລະ ການຄຳນວນອັດຕະໂນມັດ — ຄວາມປອດໄພສູງ, uptime 99.9%.',
      sol5_title:      'ອີຄອມເມີສ',
      sol5_desc:       'ລະບົບ B2B/B2C, ການເຊື່ອມຕໍ່ marketplace ແລະ loyalty — ການຂາຍຫຼາຍຊ່ອງທາງ, ການຂະຫຍາຍຕົວທີ່ຍືນຍົງ.',
      sol6_title:      'ວິທີແກ້ໄຂ AI',
      sol6_desc:       'Chatbot, Callbot ແລະ Agentic AI (Database, Report, ITS, KDB Agent) — ລະບົບ AI ອຸດສາຫະກຳ, ປະສິດທິພາບສູງ.',

      ai_label:        'ວິທີແກ້ໄຂ AI',
      ai_title:        'ພະລັງ AI <span style="color:var(--highlight)">Agentic</span><br />ສຳລັບກິດຈະການ',
      ai_subtitle:     'ຜະລິດຕະພັນ AI ຮຸ່ນໃໝ່ — ບໍ່ພຽງແຕ່ຕອບຄຳຖາມ, ແຕ່ຍັງດຳເນີນການ, ວິເຄາະ ແລະ ຕັດສິນໃຈຄືພະນັກງານຈິງ.',
      ai_f1_title:     'ການເຊື່ອມຕໍ່ທຸກຊ່ອງທາງ',
      ai_f1_desc:      'ເວັບ, Zalo, Facebook Messenger, ໂທລະສັບ — AI ດຽວບໍລິການທຸກຊ່ອງທາງ.',
      ai_f2_title:     'ຮຽນຮູ້ດ້ວຍຕົນເອງ & ປັບປຸງຢ່າງຕໍ່ເນື່ອງ',
      ai_f2_desc:      'ໂມເດວ AI ທີ່ຖືກ fine-tune ດ້ວຍຂໍ້ມູນກິດຈະການ, ປັບປຸງໃນເວລາຈິງ.',
      ai_f3_title:     'ຄວາມປອດໄພ & On-premise',
      ai_f3_desc:      'ຕິດຕັ້ງໃນໂຄງສ້າງພື້ນຖານຂອງກິດຈະການ — ຂໍ້ມູນບໍ່ອອກຈາກລະບົບ.',
      ai_demo:         'ເບິ່ງ Demo AI →',
      ai_p1_desc:      'AI ສົນທະນາຫຼາຍຊ່ອງທາງ ສຳລັບການດູແລລູກຄ້າ, ການຂາຍ ແລະ HR — ເຂົ້າໃຈພາສາທຳມະຊາດ, ຕອບຮັບທັນທີ 24/7.',
      ai_p2_desc:      'Bot ສຽງທົດແທນ IVR, ຈັດການການໂທດ້ວຍ NLP ອັດຕະໂນມັດ.',
      ai_p3_desc:      'ສອບຖາມຖານຂໍ້ມູນໃນພາສາທຳມະຊາດ — ບໍ່ຕ້ອງຂຽນ SQL.',
      ai_p4_desc:      'ສ້າງລາຍງານທຸລະກິດ ແລະ dashboard ຈາກຂໍ້ມູນດ້ວຍ AI ອັດຕະໂນມັດ.',
      ai_p5_desc:      'ການສະໜັບສະໜູນ IT ອັດສະລິຍະ: ຈັດປະເພດ ticket, ແນະນຳວິທີແກ້ໄຂ, ຄົ້ນຫາ knowledge base.',
      ai_p6_desc:      'ການຈັດການຄວາມຮູ້ພາຍໃນດ້ວຍ AI — ຖາມ-ຕອບທັນທີຈາກເອກະສານກິດຈະການ.',

      why_label:       'ເປັນຫຍັງຈຶ່ງເລືອກ DGlobal',
      why_title:       'ຄຳໝັ້ນສັນຍາທີ່ໂດດເດັ່ນ,<br />ຄູ່ຮ່ວມງານໄລຍະຍາວ',
      why_subtitle:    'ພວກເຮົາບໍ່ພຽງແຕ່ສະໜອງຊອບແວ — ພວກເຮົາຮ່ວມເດີນທາງໄປກັບການພັດທະນາຂອງທ່ານ.',
      why1_title:      'ຄວາມປອດໄພລະດັບກິດຈະການ',
      why1_desc:       'ISO 27001, ການເຂົ້າລະຫັດ end-to-end, ບັນທຶກ audit ຄົບຖ້ວນ — ລະບົບທີ່ອອກແບບປອດໄພຕັ້ງແຕ່ພື້ນຖານ.',
      why2_title:      'ປະສິດທິພາບສູງ',
      why2_desc:       'SLA 99.9% uptime, ໂຄງສ້າງ cloud-native, auto-scaling — ທຸລະກິດບໍ່ຢຸດຊະງັກ.',
      why3_title:      'ສະໜັບສະໜູນ 24/7',
      why3_desc:       'ທີມເທັກນິກພ້ອມທຸກເວລາ — ເວລາຕອບສະໜອງໜ້ອຍກວ່າ 15 ນາທີ ສຳລັບເຫດການສຳຄັນ.',
      why4_title:      'ການເຊື່ອມຕໍ່ທີ່ຍືດຫຍຸ່ນ',
      why4_desc:       'API-first, ຮອງຮັບ REST & GraphQL, ເຊື່ອມຕໍ່ງ່າຍກັບລະບົບເກົ່າ — ບໍ່ລົບກວນຂະບວນການທີ່ມີຢູ່.',

      clients_label:   'ລູກຄ້າທີ່ໄວ້ວາງໃຈ',
      clients_title:   'ໄດ້ຮັບຄວາມໄວ້ວາງໃຈ<br />ຈາກກິດຈະການຊັ້ນນຳ',
      clients_sub:     'ຕັ້ງແຕ່ startups ຈົນຮອດກຸ່ມບໍລິສັດໃຫຍ່ — DGlobal ແມ່ນຄູ່ຮ່ວມເທັກໂນໂລຊີຂອງກິດຈະການຫຼາຍຮ້ອຍແຫ່ງ.',

      testi_label:     'ຄຳຕິຊົມລູກຄ້າ',
      testi_title:     'ລູກຄ້າເວົ້າຫຍັງ<br />ກ່ຽວກັບ DGlobal',
      testi1_text:     'ລະບົບ ERP ຂອງ DGlobal ຊ່ວຍໃຫ້ພວກເຮົາຫຼຸດຜ່ອນເວລາດຳເນີນການ 40% ແລະ ເພີ່ມຄວາມຖືກຕ້ອງຂໍ້ມູນເຖິງ 99%. ທີມງານສະໜັບສະໜູນມີຄວາມເປັນມືອາຊີບສູງ.',
      testi2_text:     'AI Chatbot ຂອງ DGlobal ດຳເນີນການ 10,000+ ຄຳຮ້ອງຂໍ/ວັນ ໂດຍອັດຕະໂນມັດ. ຄວາມພໍໃຈຂອງລູກຄ້າເພີ່ມຈາກ 72% ເປັນ 91% ພຽງ 3 ເດືອນ.',
      testi3_text:     'ຊ່ອງທາງການຊຳລະຂອງ DGlobal ເຊື່ອມຕໍ່ລະບົບຂອງພວກເຮົາພາຍໃນ 2 ອາທິດ. Uptime 99.99%, ຮອງຮັບ QR Pay ແລະ BNPL ຊ່ວຍລາຍຮັບເພີ່ມ 25%.',
      testi4_text:     'DGlobal ຊ່ວຍ Dagoras ຕິດຕັ້ງລະບົບ AI Chatbot ຫຼາຍຊ່ອງທາງໃນເວລາອັນສັ້ນ. ການໃຫ້ຄຳປຶກສາ ແລະ ສະໜັບສະໜູນດ້ານເຕັກນິກດີເລີດ. ພວກເຮົາເຊື່ອໝັ້ນໃນຄວາມສາມາດທາງດ້ານເຕັກໂນໂລຊີຂອງ DGlobal.',
      testi5_text:     'ແພລດຟອມ e-learning ທີ່ລວມ AI ຂອງ DGlobal ໄດ້ປ່ຽນແປງການດຳເນີນງານຂອງ EduSmart ຢ່າງສິ້ນເຊີງ. ລະບົບໝັ້ນຄົງ, ປະມວນຜົນໄວ, ທີມງານສະໜັບສະໜູນ 24/7. ນີ້ຄືຄູ່ຮ່ວມທາງດ້ານເຕັກໂນໂລຊີທີ່ດີທີ່ສຸດ.',

      /* TELECOM PAGE */
      tc_breadcrumb:   'ໂທລະຄົມ',
      tc_hero_title:   'ບໍລິການ<br /><span style="color:var(--highlight)">ໂທລະຄົມ</span><br />ວິສາຫະກິດ',
      tc_hero_sub:     'ບໍລິການ VAS, BSS, VoIP, eSIM ແລະ ໂຄງສ້າງພື້ນຖານໂທລະຄົມທົ່ວດ້ານ — ການເຊື່ອມຕໍ່ໝັ້ນຄົງ, ຄວາມປອດໄພສູງ, ຕົ້ນທຶນທີ່ດີທີ່ສຸດ.',
      tc_btn_demo:     'ຕິດຕໍ່ Demo',
      tc_btn_back:     '← ວິທີແກ້ໄຂອື່ນ',
      tc_stat_uptime:  'Uptime SLA ຮັບປະກັນ',
      tc_stat_support: 'ສະໜັບສະໜູນ',
      tc_stat_otp:     'ຄວາມໄວສົ່ງ OTP',
      tc_stat_carrier: 'ເຄືອຂ່າຍທີ່ເຊື່ອມຕໍ່',
      tc_feat_label:   'ຄຸນສົມບັດຫຼັກ',
      tc_feat_title:   'ໂຄງສ້າງໂທລະຄົມ<br /><span style="color:var(--highlight)">ຍຸກໃໝ່</span>',
      tc_feat_sub:     'ຈາກ VoIP PBX ຫາ SMS gateway ແລະ MVNO — ແພລດຟອມດຽວສຳລັບທຸກຄວາມຕ້ອງການ.',
      tc_feat1_title:  'VoIP & IP PBX',
      tc_feat1_desc:   'ລະບົບ IP PBX ຄົບຖ້ວນ: IVR, ບັນທຶກສາຍ, ການກຳຫົນດທິດທາງສາຍ. ເຊື່ອມ CRM ແລະ ລາຍງານ real-time.',
      tc_feat2_title:  'MNO/MVO & SIM ວິສາຫະກິດ',
      tc_feat2_desc:   'ວິທີແກ້ໄຂ VAS/BSS ສຳລັບ Telco. ປັບແຕ່ງ: SIM ວິສາຫະກິດ, ການຈັດການຜູ້ໃຊ້, ຄວບຄຸມຄ່າໂທ ແລະ ເຊື່ອມຕໍ່ IoT. ຮອງຮັບ eSIM ແລະ M2M.',
      tc_feat3_title:  'Voice Brandname',
      tc_feat3_desc:   'ສະແດງຊື່ແບຣນແທນໝາຍເລກໂທລະສັບເມື່ອໂທອອກ. ເພີ່ມການຮັບຮູ້ແບຣນ, ອັດຕາຮັບສາຍ ແລະ ສ້າງຄວາມໄວ້ວາງໃຈກັບລູກຄ້າ.',
      tc_feat4_title:  'ການຈັດການ/ຕິດຕັ້ງ Private Cloud',
      tc_feat4_desc:   'ສ້າງ ແລະ ດຳເນີນການໂຄງສ້າງ Private Cloud ສຳລັບວິສາຫະກິດ — ຄວາມປອດໄພຂໍ້ມູນສູງສຸດ, ປະສິດທິພາບສູງ, ຂະຫຍາຍໄດ້ງ່າຍ.',
      tc_feat5_title:  'SMS Gateway',
      tc_feat5_desc:   'ແພລດຟອມ SMS ຫຼາຍຊ່ອງທາງ: SMS ການຕະຫຼາດ, ການແຈ້ງເຕືອນ, OTP ແລະ SMS brandname. ອັດຕາສຳເລັດ >99%, ໃນ 2 ວິນາທີ.',
      tc_feat6_title:  'OTP & ການຢັ້ງຢືນ',
      tc_feat6_desc:   'OTP ຫຼາຍຊ່ອງທາງ: SMS, ສາຍສຽງ, ອີເມລ ແລະ TOTP. ຄວາມປອດໄພ 2FA ສຳລັບ ທະນາຄານ, fintech ແລະ ອີຄອມເມີດ.',
      tc_uc_label:     'ການນຳໃຊ້ຕົວຈິງ',
      tc_uc_title:     'ອຸດສາຫະກຳໃດ<br />ໃຊ້ຫຼາຍທີ່ສຸດ?',
      tc_uc_sub:       'ວິທີແກ້ໄຂໂທລະຄົມຂອງ DGlobal ໃຫ້ບໍລິການຫຼາຍອຸດສາຫະກຳ ຈາກການເງິນ ຫາ ໂລຈິສຕິກ.',
      tc_uc1_title:    'ທະນາຄານ & ການເງິນ',
      tc_uc1_desc:     'OTP ຢັ້ງຢືນທຸລະກຳ, SMS ແຈ້ງຍອດ, ສູນບໍລິການລູກຄ້າ ແລະ voice OTP ສຳລັບລູກຄ້າທີ່ບໍ່ໃຊ້ smartphone.',
      tc_uc2_title:    'ໂລຈິສຕິກ & ອີຄອມເມີດ',
      tc_uc2_desc:     'SMS ອັບເດດສະຖານະການສັ່ງ, Number Masking ເຊື່ອມຕໍ່ຄົນຂັບ-ລູກຄ້າ, IP PBX ສຳລັບ CSKH.',
      tc_uc3_title:    'ສາທາລະນະສຸກ & ໂຮງໝໍ',
      tc_uc3_desc:     'SMS ແຈ້ງເຕືອນນັດໝາຍ, OTP ຈອງນັດໄດ້ online, ສາຍດ່ວນ ແລະ ລະບົບແຈ້ງເຕືອນພາຍໃນ.',
      tc_uc4_title:    'ຂາຍຍ່ອຍ & ການຕະຫຼາດ',
      tc_uc4_desc:     'SMS ການຕະຫຼາດສ່ວນຕົວ, ໂປຣໂໝຊັ່ນ flash sale, ແຈ້ງເຕືອນກະຕ່າ ແລະ loyalty points.',
      tc_testimonial:  '"Voice Brandname ຂອງ DGlobal ຊ່ວຍໃຫ້ອັດຕາຮັບສາຍຂອງທີມຂາຍເພີ່ມຂຶ້ນຫຼາຍກວ່າ 40% ພາຍໃນ 1 ເດືອນ. ລູກຄ້າເຫັນຊື່ບໍລິສັດແທນໝາຍເລກແປກ, ສ້າງຄວາມໄວ້ວາງໃຈທັນທີ. ບໍລິການໝັ້ນຄົງ, ສະໜັບສະໜູນວ່ອງໄວ."',
      tc_metric1:      'ອັດຕາສຳເລັດ',
      tc_metric2:      'ຫຼຸດຕົ້ນທຶນ',
      tc_proc_label:   'ຕິດຕັ້ງໄວ',
      tc_proc_title:   'ເຊື່ອມຕໍ່ວິສາຫະກິດ<br /><span style="color:var(--highlight)">ໃນ 4 ຂັ້ນຕອນງ່າຍ</span>',
      tc_step1_title:  'ປຶກສາ & ເລືອກ',
      tc_step1_desc:   'ປະເມີນຄວາມຕ້ອງການ, ປະລິມານ ແລະ ງົບປະມານ. ແນະນຳຊຸດບໍລິການທີ່ດີທີ່ສຸດ.',
      tc_step2_title:  'ອະນຸຍາດ & ຕັ້ງຄ່າ',
      tc_step2_desc:   'ລົງທະບຽນ brandname, ຕັ້ງຄ່າ API, ກຳນົດໝາຍເລກ ແລະ ກວດສອບການເຊື່ອມຕໍ່.',
      tc_step3_title:  'ເຊື່ອມ & ທົດສອບ',
      tc_step3_desc:   'ເຊື່ອມ API ກັບລະບົບທີ່ມີຢູ່, ທົດສອບຄົບຖ້ວນ ແລະ ຢັ້ງຢືນຄຸນນະພາບ.',
      tc_step4_title:  'Go-live & ຕິດຕາມ',
      tc_step4_desc:   'ເປີດໃຊ້ຢ່າງເປັນທາງການດ້ວຍການຕິດຕາມ 24/7, dashboard real-time ແລະ ສະໜັບສະໜູນຕໍ່ເນື່ອງ.',
      tc_cta_label:    'ເຊື່ອມຕໍ່ໄດ້ເລີຍ',
      tc_cta_title:    'ຕ້ອງການເພີ່ມປະສິດທິພາບ<br /><span style="color:var(--highlight)">ໂຄງສ້າງໂທລະຄົມ?</span>',
      tc_cta_sub:      'ນັດ demo ຟຣີ — ຜູ້ຊ່ຽວຊານ DGlobal ຈະໃຫ້ຄຳແນະນຳ ແລະ ສ່ງລາຄາພາຍໃນ 24 ຊົ່ວໂມງ.',
      tc_cta_btn:      'ຕິດຕໍ່ Demo ເດີ',
      tc_cta_call:     'ໂທ: 0981 100 001',
      tc_modal_title:  'ລົງທະບຽນ Demo ຟຣີ',
      tc_modal_sub:    'ຕື່ມຂໍ້ມູນ, ຜູ້ຊ່ຽວຊານ DGlobal ຈະຕິດຕໍ່ພາຍໃນ 24 ຊົ່ວໂມງ.',
      footer_col1:     'ວິທີແກ້ໄຂ',
      footer_col2:     'ຜະລິດຕະພັນ AI',
      footer_col3:     'ບໍລິສັດ',
      footer_about:    'ກ່ຽວກັບ DGlobal',
      form_name:       'ຊື່ແລະນາມສະກຸນ',
      form_name_ph:    'ໄຊສົມບັດ ສີດາວົງ',
      form_name_err:   'ກະລຸນາໃສ່ຊື່ຂອງທ່ານ',
      form_phone:      'ເບີໂທລະສັບ',
      form_phone_ph:   '+856 20 1234 5678',
      form_phone_err:  'ກະລຸນາໃສ່ເບີໂທທີ່ຖືກຕ້ອງ',
      form_email:      'ອີເມລ',
      form_email_ph:   'email@company.com',
      form_email_err:  'ກະລຸນາໃສ່ທີ່ຢູ່ອີເມລທີ່ຖືກຕ້ອງ',
      form_msg:        'ເນື້ອໃນຕິດຕໍ່',
      form_msg_ph:     'ອະທິບາຍຄວາມຕ້ອງການຫຼືຄຳຖາມຂອງທ່ານ...',
      form_msg_err:    'ກະລຸນາໃສ່ເນື້ອໃນຕິດຕໍ່',
      form_submit:     'ສົ່ງຂໍ້ມູນ',
      form_note:       'ຂໍ້ມູນຂອງທ່ານຈະຖືກຮັກສາຄວາມລັບ ແລະ ໃຊ້ເພື່ອການຕິດຕໍ່ເທົ່ານັ້ນ.',
      form_success_title: 'ສົ່ງສຳເລັດ!',
      form_success_desc:  'ຂອບໃຈທີ່ຕິດຕໍ່ມາ. ທີມ DGlobal ຈະຕອບກັບພາຍໃນ <strong style="color:var(--accent-hover)">24 ຊົ່ວໂມງ</strong>.',
      modal_close:     'ປິດ',

      cta_label:       'ເລີ່ມຕົ້ນໄດ້ເລີຍ',
      cta_title:       'ພ້ອມທີ່ຈະປ່ຽນແປງ<br /><span style="color:var(--accent-hover)">ທຸລະກິດຂອງທ່ານ?</span>',
      cta_sub:         'ຕິດຕໍ່ຜູ້ຊ່ຽວຊານຂອງພວກເຮົາ ເພື່ອຮັບຄຳປຶກສາດ້ານວິທີແກ້ໄຂທີ່ເໝາະສົມ — ຟຣີ.',
      cta_btn1:        'ຮັບຄຳປຶກສາຟຣີ',
      cta_btn2:        'ໂທ: 0981 100 001',

      footer_desc:     'DGlobal Technology Joint Stock Company — ວິທີແກ້ໄຂດ້ານເທັກໂນໂລຊີຄົບວົງຈອນ ສຳລັບກິດຈະການດິຈິຕອນ.',
      footer_sol:      'ວິທີແກ້ໄຂ',
      footer_ai:       'ຜະລິດຕະພັນ AI',
      footer_company:  'ບໍລິສັດ',
      footer_about:    'ກ່ຽວກັບ DGlobal',
      footer_customers:'ລູກຄ້າ',
      footer_careers:  'ຮັບສະໝັກ',
      footer_contact:  'ຕິດຕໍ່',
      footer_privacy:  'ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ',
      footer_terms:    'ເງື່ອນໄຂການໃຫ້ບໍລິການ',
      footer_copy:     '© 2025 DGlobal Technology JSC. All rights reserved.',

      modal_title:     'ຕິດຕໍ່ພວກເຮົາ',
      modal_sub:       'ຕື່ມຂໍ້ມູນດ້ານລຸ່ມ ພວກເຮົາຈະຕອບກັບພາຍໃນ 24 ຊົ່ວໂມງ.',
      modal_name:      'ຊື່ ແລະ ນາມສະກຸນ',
      modal_phone:     'ເບີໂທລະສັບ',
      modal_email:     'ອີເມວ',
      modal_msg:       'ຂໍ້ຄວາມ',
      modal_ph_name:   'ຊື່ຂອງທ່ານ',
      modal_ph_phone:  '+856 20 xxxx xxxx',
      modal_ph_email:  'email@company.com',
      modal_ph_msg:    'ອະທິບາຍຄວາມຕ້ອງການ ຫຼື ຄຳຖາມຂອງທ່ານ...',
      modal_submit:    'ສົ່ງຂໍ້ມູນ',
      modal_note:      'ຂໍ້ມູນຂອງທ່ານຈະຖືກຮັກສາໄວ້ເປັນຄວາມລັບ ແລະ ໃຊ້ສຳລັບການຕິດຕໍ່ເທົ່ານັ້ນ.',
      modal_err_name:  'ກະລຸນາໃສ່ຊື່ຂອງທ່ານ',
      modal_err_phone: 'ກະລຸນາໃສ່ເບີໂທທີ່ຖືກຕ້ອງ',
      modal_err_email: 'ກະລຸນາໃສ່ອີເມວທີ່ຖືກຕ້ອງ',
      modal_err_msg:   'ກະລຸນາໃສ່ຂໍ້ຄວາມ',
      modal_success_title: 'ສົ່ງສຳເລັດ!',
      modal_success_desc:  'ຂອບໃຈທີ່ຕິດຕໍ່ມາ. ທີມງານ DGlobal ຈະຕອບກັບພາຍໃນ <strong style="color:var(--accent-hover)">24 ຊົ່ວໂມງ</strong>.',
      modal_close:     'ປິດ',

      hotline_label:   '📞 0981 100 001',

      career_hero_title:  'ສ້າງອະນາຄົດ <span>ກັບ DGlobal</span>',
      career_hero_sub:    'ພວກເຮົາກຳລັງຊອກຫາຜູ້ມີຄວາມສາມາດ ເພື່ອຮ່ວມກັນສ້າງວິທີແກ້ໄຂດ້ານເທັກໂນໂລຊີ ສຳລັບກິດຈະການໃນຫວຽດນາມ ແລະ ພາກພື້ນ.',
      career_jobs_label:  'ຕຳແໜ່ງທີ່ເປີດຮັບ',
      career_jobs_title:  'ໂອກາດ<span>ດ້ານອາຊີບ</span>',
      career_jobs_sub:    'DGlobal ກຳລັງຂະຫຍາຍທີມດ້ວຍຕຳແໜ່ງທີ່ໜ້າສົນໃຈ. ທຸກຕຳແໜ່ງມີໂອກາດເຮັດວຽກແບບ hybrid ແລະ ເສັ້ນທາງອາຊີບທີ່ຊັດເຈນ.',
      career_apply:       'ສະໝັກ',
      career_contact:     'ຕິດຕໍ່',
      career_salary:      'ຕາມຕົກລົງ · ແຂ່ງຂັນ',
      career_why_label:   'ເປັນຫຍັງຈຶ່ງເລືອກ DGlobal?',
      career_why_title:   'ສະພາບແວດລ້ອມ<span>ການພັດທະນາ</span>',
      career_process_label: 'ຂັ້ນຕອນການຮັບສະໝັກ',
      career_process_title: 'ຈາກໃບສະໝັກ ຈົນຮອດ <span>Offer Letter</span>',
      career_cta_title:   'ພ້ອມທີ່ຈະເຂົ້າຮ່ວມ <span style="background:linear-gradient(135deg,#2563EB,#06B6D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">ທີມ DGlobal</span> ແລ້ວບໍ?',
      career_cta_sub:     'ສົ່ງ CV ຂອງທ່ານມື້ນີ້ ແລະ ເປັນສ່ວນໜຶ່ງຂອງການຫັນເປັນດິຈິຕອນຂອງຫວຽດນາມ.',
      career_cta_btn:     'ສະໝັກດຽວນີ້',
      career_cta_email:   'ອີເມວ HR ໂດຍກົງ',
    }
  };

  const LANG_META = {
    vi: { flag: '🇻🇳', label: 'VI' },
    en: { flag: '🇺🇸', label: 'EN' },
    ko: { flag: '🇰🇷', label: 'KO' },
    lo: { flag: '🇱🇦', label: 'LO' },
  };

  function getCurrentLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT;
  }

  function apply(lang) {
    if (!LANGS.includes(lang)) lang = DEFAULT;
    const d = T[lang];
    localStorage.setItem(STORAGE_KEY, lang);

    // Update all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (d[key] !== undefined) {
        // Use innerHTML for keys that contain HTML
        el.innerHTML = d[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (d[key] !== undefined) el.placeholder = d[key];
    });

    // Update lang switcher active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update <html lang>
    document.documentElement.lang = lang;
  }

  function init() {
    // Inject switcher CSS
    const style = document.createElement('style');
    style.textContent = `
      /* ── Desktop flag switcher ── */
      .lang-switcher{
        display:flex;align-items:center;gap:2px;
        background:rgba(255,255,255,.06);
        border:1px solid rgba(255,255,255,.12);
        border-radius:12px;padding:4px;
        margin-right:4px;
      }
      .lang-btn{
        position:relative;
        display:flex;align-items:center;justify-content:center;
        width:36px;height:36px;
        border-radius:8px;border:2px solid transparent;
        background:transparent;cursor:pointer;
        transition:all .2s;padding:0;
        font-size:22px;line-height:1;color:#fff;
      }
      .lang-btn:hover{
        background:rgba(255,255,255,.1);
        transform:scale(1.12);
      }
      .lang-btn.active{
        border-color:rgba(37,99,235,.7);
        background:rgba(37,99,235,.2);
        box-shadow:0 0 8px rgba(37,99,235,.35);
      }
      /* Tooltip — hiện phía dưới */
      .lang-btn::after{
        content:attr(data-tooltip);
        position:absolute;top:calc(100% + 6px);left:50%;
        transform:translateX(-50%);
        background:#1F2937;color:#F9FAFB;
        font-family:'Inter',sans-serif;font-size:11px;font-weight:600;
        padding:3px 7px;border-radius:5px;white-space:nowrap;
        opacity:0;pointer-events:none;transition:opacity .15s;
        border:1px solid rgba(255,255,255,.1);
        z-index:10;
      }
      .lang-btn:hover::after{opacity:1;}

      @media(max-width:768px){.lang-switcher{display:none}}

      /* ── Mobile flag switcher (inside drawer) ── */
      .lang-switcher-mobile{
        display:none;gap:8px;flex-wrap:wrap;
        padding:12px 0 0;margin-top:8px;
        border-top:1px solid rgba(255,255,255,.08);
      }
      @media(max-width:768px){.lang-switcher-mobile{display:flex}}
      .lang-btn-mobile{
        position:relative;
        display:flex;align-items:center;justify-content:center;
        width:36px;height:36px;
        border-radius:8px;border:2px solid transparent;
        background:transparent;
        cursor:pointer;transition:all .2s;padding:0;
        font-size:22px;line-height:1;color:#fff;
      }
      .lang-btn-mobile:hover{background:rgba(255,255,255,.1);transform:scale(1.12);}
      .lang-btn-mobile.active{
        border-color:rgba(37,99,235,.7);
        background:rgba(37,99,235,.2);
        box-shadow:0 0 8px rgba(37,99,235,.35);
      }
    `;
    document.head.appendChild(style);

    const langNames = { vi:'Tiếng Việt', en:'English', ko:'한국어', lo:'ພາສາລາວ' };

    // Build desktop switcher HTML — flag only + tooltip
    const switcherHTML = `<div class="lang-switcher" id="langSwitcher">${
      LANGS.map(l => `<button class="lang-btn" data-lang="${l}" data-tooltip="${langNames[l]}">${LANG_META[l].flag}</button>`).join('')
    }</div>`;

    // Build mobile switcher HTML — flag only + tooltip (same as desktop)
    const mobileSwitcherHTML = `<div class="lang-switcher-mobile" id="langSwitcherMobile">${
      LANGS.map(l => `<button class="lang-btn-mobile lang-btn" data-lang="${l}" data-tooltip="${langNames[l]}">${LANG_META[l].flag}</button>`).join('')
    }</div>`;

    // Inject desktop switcher into nav-actions (before last child or append)
    const navActions = document.querySelector('.nav-actions');
    if (navActions) navActions.insertAdjacentHTML('afterbegin', switcherHTML);

    // Inject mobile switcher into drawer
    const drawer = document.getElementById('mobileDrawer');
    if (drawer) drawer.insertAdjacentHTML('beforeend', mobileSwitcherHTML);

    // Bind click events
    document.addEventListener('click', e => {
      const btn = e.target.closest('.lang-btn');
      if (btn && btn.dataset.lang) apply(btn.dataset.lang);
    });

    // Apply saved or default language
    apply(getCurrentLang());
  }

  window.DGi18n = { apply, getCurrentLang, T };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
