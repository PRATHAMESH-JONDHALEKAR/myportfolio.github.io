const MailBody = document.getElementById('MailBody');
const NoteF = document.getElementById('NoteF');
const NoteB = document.getElementById('NoteB');
const Note = document.getElementById('Note_1_');
const NoteBase = document.getElementById('Base');

openCloseContactInfo();

function openCloseContactInfo() {

    var contactAnimTlm = gsap.timeline({ paused: true, reversed: true });
    contactAnimTlm
        .to(NoteF, { y: -100 })
        .to(NoteB, { y: -100 }, 0)
        .to(NoteF, { opacity: 1, duration: 0 })
        .to(NoteB, { opacity: 0, duration: 0 }, "+=0")
        .to(NoteF, { scale: 3, transformOrigin: "50% 50%", y: 0 });

    $(MailBody).click(function () {
        contactAnimTlm.reversed() ? contactAnimTlm.play() : contactAnimTlm.reverse();
    });
}