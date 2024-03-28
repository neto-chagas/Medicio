$(() => {
    const form = $("#message-us");

    form.novalidate = true;
    form.off('submit')
        .on('submit', e => {
            e.preventDefault();
            const loading = form.find('.loading');
            const sentMessage = form.find('.sent-message');

            loading.css("display", "block");
            setTimeout(() => {
                loading.css("display", "none");
                sentMessage.css("display", "block");
            }, 1000);
        });
})