import { useState } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import Lanyard from "./components/Lanyard/Lanyard";
import { listTools, listProyek, listExperience, listCerts } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import CertModal from "./components/CertModal/CertModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
// import ChatRoom from "./components/ChatRoom"; // Aktifkan setelah Firebase dikonfigurasi
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expFilter, setExpFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main>

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-5 sm:mb-6 bg-zinc-900/80 w-fit max-w-full p-3 sm:p-4 rounded-2xl text-sm border border-zinc-700/60 shadow-[inset_0_1px_0_rgba(255,255,255,.04)] backdrop-blur-sm">
              <img src={`${import.meta.env.BASE_URL}assets/raihan.png`} alt="Raihan Zaki Alhafiz" className="w-10 rounded-md" />
              <q>Code with passion, build with purpose</q>
            </div>
            <div className="mb-4 sm:mb-6">
              <div className="w-10 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mb-3" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <ShinyText text="Hi I'm Raihan Zaki Alhafiz" disabled={false} speed={3} className='custom-class' />
              </h1>
            </div>
            <BlurText
              text="An Informatics Engineering student focused on Full Stack Web Development, experienced in building modern web apps using Laravel, Vue.js, and React — from interactive UIs to RESTful APIs and database integration."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`${import.meta.env.BASE_URL}assets/cv raihan.pdf`}
                download="Raihan_Zaki_Alhafiz_CV.pdf"
                className="font-semibold flex items-center gap-2 px-6 py-3.5 rounded-full bg-cyan-500/15 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/25 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300"
              >
                <i className="ri-download-2-line text-base" />
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>
              <a
                href="#project"
                className="font-semibold flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900/60 border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white hover:bg-zinc-800/80 transition-all duration-300"
              >
                <i className="ri-folder-2-line text-base" />
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Raihan Zaki A"
              title="Full Stack Developer"
              handle="raihanzaki03"
              status="Online"
              contactText="Contact Me"
              avatarUrl={`${import.meta.env.BASE_URL}assets/raihan.png`}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
        {/* Hero → About separator */}
        <div className="mt-16 sm:mt-20 flex items-center gap-4" aria-hidden="true">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
          <div className="flex gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        </div>

        {/* tentang */}
        <div className="mt-10 sm:mt-15 mx-auto w-full max-w-[1600px] rounded-2xl sm:rounded-3xl border-[3px] sm:border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-4 sm:p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 pt-0 px-3 sm:px-6 md:px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <div className="mb-4 sm:mb-5">
                  <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 mb-3" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    About Me
                  </h2>
                </div>

                <BlurText
                  text="I’m Raihan Zaki Alhafiz, an Informatics Engineering student at Sebelas Maret University with a focus on Full Stack Web Development. I have experience developing modern and responsive web applications using Laravel, Vue.js, and React — skilled in both front-end and back-end development, including RESTful APIs, authentication systems, and database integration. Committed to delivering scalable and high-quality web solutions."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-6 sm:gap-y-0 mb-4 w-full">
                  {/* Stat 1 */}
                  <div className="flex flex-col items-center sm:items-start gap-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 mb-1">
                      <i className="ri-folder-check-line text-violet-400 text-sm" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold">6<span className="text-violet-500">+</span></h3>
                    <p className="text-sm text-zinc-400">Project Finished</p>
                  </div>

                  <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-zinc-600 to-transparent" aria-hidden="true" />

                  {/* Stat 2 */}
                  <div className="flex flex-col items-center sm:items-start gap-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 mb-1">
                      <i className="ri-time-line text-cyan-400 text-sm" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold">3<span className="text-violet-500">+</span></h3>
                    <p className="text-sm text-zinc-400">Years of Experience</p>
                  </div>

                  <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-zinc-600 to-transparent" aria-hidden="true" />

                  {/* Stat 3 */}
                  <div className="flex flex-col items-center sm:items-start gap-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 mb-1">
                      <i className="ri-graduation-cap-line text-amber-400 text-sm" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold">3.80<span className="text-violet-500">/4.00</span></h3>
                    <p className="text-sm text-zinc-400">GPA</p>
                  </div>
                </div>


                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>

        </div>
        <div className="tools mt-24 sm:mt-32">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mb-3" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 leading-snug">Tools &amp; Technologies</h2>
          </div>
          <p className="w-full sm:w-2/5 text-sm sm:text-base leading-loose text-zinc-500" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Technologies I use to build modern web experiences
          </p>
          <div className="tools-box mt-8 sm:mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 sm:gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 border border-zinc-700/50 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/90 hover:border-zinc-500/70 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 group cursor-default"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-zinc-800/80 border border-zinc-700/50 group-hover:border-zinc-600 group-hover:bg-zinc-800 p-1.5 sm:p-2 flex items-center justify-center transition-all duration-300">
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-sm sm:text-base font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Pengalaman & Pendidikan */}
        <div className="mt-24 sm:mt-32" id="experience">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div>
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mb-3" />
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 leading-snug">
                  Pengalaman &amp; Pendidikan
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-loose text-zinc-500" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                Perjalanan saya sejauh ini
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
              {[
                { key: 'all',          label: 'Semua',      icon: 'ri-apps-line' },
                { key: 'work',         label: 'Kerja',      icon: 'ri-briefcase-4-line' },
                { key: 'education',    label: 'Pendidikan', icon: 'ri-graduation-cap-line' },
                { key: 'organization', label: 'Organisasi', icon: 'ri-group-line' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setExpFilter(tab.key)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 cursor-pointer
                    ${expFilter === tab.key
                      ? tab.key === 'work'         ? 'bg-cyan-500/20 border-cyan-500/60 text-cyan-300'
                        : tab.key === 'education'  ? 'bg-violet-500/20 border-violet-500/60 text-violet-300'
                        : tab.key === 'organization'? 'bg-amber-500/20 border-amber-500/60 text-amber-300'
                        : 'bg-white/10 border-white/30 text-white'
                      : 'bg-zinc-900/60 border-zinc-700/50 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
                    }`}
                >
                  <i className={`${tab.icon} text-base`} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid lg:grid-cols-2 gap-4">
            {listExperience
              .filter(item => expFilter === 'all' || item.type === expFilter)
              .map((item) => {
                const colors = item.type === 'work'
                  ? { bar: 'from-cyan-500 to-teal-400', iconBg: 'bg-cyan-500/15 border-cyan-500/30', iconText: 'ri-briefcase-4-line text-cyan-400', period: 'text-cyan-400', badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' }
                  : item.type === 'education'
                  ? { bar: 'from-violet-500 to-purple-400', iconBg: 'bg-violet-500/15 border-violet-500/30', iconText: 'ri-graduation-cap-line text-violet-400', period: 'text-violet-400', badge: 'bg-violet-500/10 text-violet-400 border-violet-500/30' }
                  : { bar: 'from-amber-500 to-yellow-400', iconBg: 'bg-amber-500/15 border-amber-500/30', iconText: 'ri-group-line text-amber-400', period: 'text-amber-400', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30' };

                return (
                  <div
                    key={item.id}
                    className="relative flex gap-4 p-5 bg-zinc-900/60 border border-zinc-700/50 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-zinc-600 hover:shadow-lg transition-all duration-300 group backdrop-blur-sm"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={item.delay}
                    data-aos-once="true"
                  >
                    {/* Left accent bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b rounded-l-2xl ${colors.bar}`} />

                    {/* Icon */}
                    <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border ${colors.iconBg}`}>
                      <i className={`text-lg ${colors.iconText}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className={`text-xs font-bold uppercase tracking-wider ${colors.period}`}>
                          {item.period}
                        </span>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold ${colors.badge}`}>
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="font-bold text-base mb-0.5 group-hover:text-white transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-500 mb-2 flex items-center gap-1">
                        <i className="ri-map-pin-line text-zinc-600" />
                        {item.place}
                      </p>
                      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {/* Pengalaman & Pendidikan */}

        {/* Sertifikat & Penghargaan */}
        <div className="mt-24 sm:mt-32" id="certs">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8"
               data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div>
              <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-violet-500 mb-3" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-1 leading-snug">Sertifikat &amp; Penghargaan</h2>
              <p className="text-sm sm:text-base text-zinc-500">Pembelajaran dan pengakuan berkelanjutan</p>
            </div>
            <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400">
              {listCerts.length} sertifikat
            </span>
          </div>

          {/* Grid — 2 kolom di mobile, 3 di desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {listCerts.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="relative flex flex-col p-3 sm:p-4 border border-zinc-700/50 rounded-2xl bg-zinc-900/60 backdrop-blur-sm cursor-pointer overflow-hidden hover:border-zinc-500 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={cert.delay}
                data-aos-once="true"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                     style={{ background: `linear-gradient(90deg, ${cert.colorFrom}, ${cert.colorTo})` }} />

                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                     style={{ background: `radial-gradient(ellipse at top, ${cert.colorFrom}14, transparent 65%)` }} />

                {/* Icon + year */}
                <div className="flex items-start justify-between mb-2.5 z-10">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-base sm:text-lg text-white shadow-md shrink-0"
                       style={{ background: `linear-gradient(135deg, ${cert.colorFrom}, ${cert.colorTo})` }}>
                    <i className={cert.icon} />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full shrink-0"
                        style={{ color: cert.colorFrom, border: `1px solid ${cert.colorFrom}45`, background: `${cert.colorFrom}15` }}>
                    {cert.year}
                  </span>
                </div>

                {/* Title + issuer */}
                <div className="z-10 flex-1 min-w-0">
                  <h4 className="font-bold text-xs sm:text-sm leading-snug mb-1 group-hover:text-white transition-colors line-clamp-2">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-zinc-500 truncate">{cert.issuer}</p>
                </div>

                {/* Footer: Drive link OR view hint */}
                <div className="mt-2.5 pt-2.5 border-t border-zinc-700/50 z-10 flex items-center justify-between">
                  {cert.driveUrl ? (
                    <a
                      href={cert.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <i className="ri-drive-line text-sm" />
                      <span>Lihat Dokumen</span>
                    </a>
                  ) : (
                    <span className="text-[10px] sm:text-xs text-zinc-600 group-hover:text-zinc-500 transition-colors flex items-center gap-1">
                      <i className="ri-link text-xs" />
                      Belum ada link
                    </span>
                  )}
                  <span className="text-[10px] sm:text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors flex items-center gap-1">
                    <i className="ri-eye-line" /> Detail
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Sertifikat & Penghargaan */}

        {/* Proyek */}
        <div className="proyek mt-24 sm:mt-32 py-6 sm:py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mb-3" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" />
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h2>
          <p className="text-sm sm:text-base leading-loose text-center text-zinc-500 max-w-2xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.
          </p>
        </div>
        <div className="proyek-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Proyek */}


        {/* Kontak */}
        <div className="kontak mt-24 sm:mt-32" id="contact">
          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mb-3" />
            <h2 className="text-4xl mb-2 font-bold text-center">Contact &amp; Chat</h2>
          </div>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          {/* Container dua kolom */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Chat Room di kiri — coming soon card */}
            <div
              className="flex-1 border border-dashed border-zinc-700/60 bg-zinc-900/50 rounded-2xl flex flex-col items-center justify-center gap-4 min-h-[300px] relative overflow-hidden"
              data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true"
            >
              {/* Subtle glow */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.04) 0%, transparent 70%)' }} />
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center z-10">
                <i className="ri-chat-3-line text-2xl text-cyan-400" />
              </div>
              <div className="text-center z-10 px-6">
                <p className="text-white font-semibold text-lg mb-1">Chat Room</p>
                <p className="text-zinc-500 text-sm leading-relaxed">Live chat feature coming soon.<br />Firebase integration in progress.</p>
              </div>
              <span className="z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Coming soon
              </span>
            </div>

            {/* Contact Form di kanan */}
            <div className="flex-1">
              <form
                action="https://formsubmit.co/raihanzaki121203@gmail.com"
                method="POST"
                className="bg-zinc-900/80 border border-zinc-700/50 p-5 sm:p-8 w-full rounded-2xl backdrop-blur-sm shadow-xl"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold flex items-center gap-2 text-zinc-300">
                      <i className="ri-user-3-line text-cyan-400 text-base" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Your full name..."
                      className="w-full border border-zinc-700/60 px-4 py-3 rounded-xl placeholder-zinc-500 focus:outline-none focus:border-cyan-500/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)] transition-all duration-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold flex items-center gap-2 text-zinc-300">
                      <i className="ri-mail-line text-cyan-400 text-base" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="your@email.com"
                      className="w-full border border-zinc-700/60 px-4 py-3 rounded-xl placeholder-zinc-500 focus:outline-none focus:border-cyan-500/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)] transition-all duration-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold flex items-center gap-2 text-zinc-300">
                      <i className="ri-message-3-line text-cyan-400 text-base" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="7"
                      placeholder="What would you like to discuss?"
                      className="w-full border border-zinc-700/60 px-4 py-3 rounded-xl placeholder-zinc-500 focus:outline-none focus:border-cyan-500/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)] transition-all duration-200 resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full font-semibold flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cyan-500/15 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/25 hover:border-cyan-400 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] active:scale-[0.98] cursor-pointer transition-all duration-300"
                  >
                    <i className="ri-send-plane-line text-base" />
                    <ShinyText text="Send Message" disabled={false} speed={3} className="custom-class" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />

      {selectedCert && (
        <CertModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </>
  )
}

export default App
