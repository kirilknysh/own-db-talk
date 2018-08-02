(function () {
    const backbone = `
        <div class="timeline-row">
            <div class="timeline-row-title">database</div>
            <div class="timeline-events-container -db">
                <div class="timeline-events-axis"></div>
            </div>
        </div>
        <div class="timeline-row">
            <div class="timeline-row-title">fs helpers</div>
            <div class="timeline-events-container -fs-helpers">
                <div class="timeline-events-axis"></div>
            </div>
        </div>
    `;

    const type = {
        ROCKET: 'ROCKET',
        POOP: 'POOP',
    };
    const events = new Map();
    events.set('full', {
        db: [
            { date: new Date('2016-09-30T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away', randomize: true },
            { date: new Date('2016-10-10T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away', randomize: true },
            { date: new Date('2016-10-17T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away', randomize: true },
            { date: new Date('2016-10-28T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away', randomize: true },
            { date: new Date('2016-11-01T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away', randomize: true },
            { date: new Date('2016-11-09T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away', randomize: true },
            { date: new Date('2016-11-30T00:00:00').getTime(), type: type.POOP, animation: '-modesty' },
            { date: new Date('2016-12-15T00:00:00').getTime(), type: type.POOP, animation: '-modesty' },
            { date: new Date('2017-02-17T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away', randomize: true },
            { date: new Date('2017-10-31T00:00:00').getTime(), type: type.POOP, animation: '-modesty' },
            { date: new Date('2018-05-25T00:00:00').getTime(), type: type.POOP, animation: '-modesty' },
            { date: new Date('2018-06-26T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away', randomize: true },
        ],
        fsHelpers: [
            { date: new Date('2016-11-17T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away', randomize: true },
            { date: new Date('2017-06-13T00:00:00').getTime(), type: type.POOP, animation: '-modesty' },
            { date: new Date('2018-01-05T00:00:00').getTime(), type: type.POOP, animation: '-modesty' },
            { date: new Date('2018-07-25T00:00:00').getTime(), type: type.POOP, animation: '-modesty' },
        ],
    });
    events.set('step-0', {
        db: [
            { date: new Date('2016-09-30T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away', randomize: true },
            { date: new Date('2016-10-10T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away', randomize: true },
            { date: new Date('2016-10-17T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away', randomize: true },
            { date: new Date('2016-10-28T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away', randomize: true },
            { date: new Date('2016-11-01T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away', randomize: true },
            { date: new Date('2016-11-09T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away', randomize: true },
        ],
        fsHelpers: [],
    });
    events.set('step-1', {
        db: [
            { date: new Date('2016-09-30T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-10-10T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-10-17T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-10-28T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-11-01T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-11-09T00:00:00').getTime(), type: type.ROCKET },
        ],
        fsHelpers: [
            { date: new Date('2016-11-17T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away' },
        ],
    });
    events.set('step-2', {
        db: [
            { date: new Date('2016-09-30T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-10-10T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-10-17T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-10-28T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-11-01T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-11-09T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-11-30T00:00:00').getTime(), type: type.POOP, animation: '-modesty' },
        ],
        fsHelpers: [
            { date: new Date('2016-11-17T00:00:00').getTime(), type: type.ROCKET },
        ],
    });
    events.set('step-3', {
        db: [
            { date: new Date('2016-09-30T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-10-10T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-10-17T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-10-28T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-11-01T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-11-09T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-11-30T00:00:00').getTime(), type: type.POOP },
            { date: new Date('2016-12-15T00:00:00').getTime(), type: type.POOP, animation: '-modesty' },
        ],
        fsHelpers: [
            { date: new Date('2016-11-17T00:00:00').getTime(), type: type.ROCKET },
        ],
    });
    events.set('step-4', {
        db: [
            { date: new Date('2016-09-30T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-10-10T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-10-17T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-10-28T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-11-01T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-11-09T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-11-30T00:00:00').getTime(), type: type.POOP },
            { date: new Date('2016-12-15T00:00:00').getTime(), type: type.POOP },
            { date: new Date('2017-02-17T00:00:00').getTime(), type: type.ROCKET, animation: '-fly-away' },
        ],
        fsHelpers: [
            { date: new Date('2016-11-17T00:00:00').getTime(), type: type.ROCKET },
        ],
    });
    events.set('step-5', {
        db: [
            { date: new Date('2016-09-30T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-10-10T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-10-17T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-10-28T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-11-01T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-11-09T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2016-11-30T00:00:00').getTime(), type: type.POOP },
            { date: new Date('2016-12-15T00:00:00').getTime(), type: type.POOP },
            { date: new Date('2017-02-17T00:00:00').getTime(), type: type.ROCKET },
        ],
        fsHelpers: [
            { date: new Date('2016-11-17T00:00:00').getTime(), type: type.ROCKET },
            { date: new Date('2017-06-13T00:00:00').getTime(), type: type.POOP, animation: '-modesty' },
        ],
    });

    const LEFT_DATE = new Date('2016-09-01T00:00:00').getTime();
    const RIGHT_DATE = new Date().getTime();
    const DATE_WIDTH = RIGHT_DATE - LEFT_DATE;

    function getClasses(timelineEvent) {
        const classes = ['-event'];

        if (timelineEvent.animation) {
            classes.push(timelineEvent.animation);
        }

        return classes;
    }

    function getText(timelineEvent) {
        switch (timelineEvent.type) {
            case type.POOP:
                return '💩';
            default:
                return '🚀';
        }
    }

    function getLeftOffset(timelineEvent) {
        const left = timelineEvent.date - LEFT_DATE;
        const percent = ~~((left / DATE_WIDTH) * 100);

        return `${percent}%`;
    }

    function getAnimationDelay(timelineEvent) {
        if (!timelineEvent.animation || !timelineEvent.randomize) {
            return '0';
        }

        return `${~~(Math.random() * 1000)}ms`;
    }

    function renderEvent(timelineEvent) {
        const node = document.createElement('div');

        node.classList.add(...getClasses(timelineEvent));
        node.innerText = getText(timelineEvent);
        node.style.left = getLeftOffset(timelineEvent);
        node.style.animationDelay = getAnimationDelay(timelineEvent);

        return node;
    }

    function renderEvents(timelineEvents) {
        return timelineEvents.reduce((fragment, timelineEvent) => {
            fragment.appendChild(renderEvent(timelineEvent));

            return fragment;
        }, document.createDocumentFragment());
    }

    function renderTimeline(timelineNode, timelineType) {
        timelineNode.innerHTML = backbone;

        const timelineEvents = events.get(timelineType);
        const dbEventsFragment = renderEvents(timelineEvents.db);
        const fsHelpersEventsFragment = renderEvents(timelineEvents.fsHelpers);

        timelineNode.querySelector('.timeline-events-container.-db').appendChild(dbEventsFragment);
        timelineNode.querySelector('.timeline-events-container.-fs-helpers').appendChild(fsHelpersEventsFragment);
    }

    document.querySelectorAll('[data-timeline]').forEach((timelineNode) => {
        const timelineType = timelineNode.dataset.timeline;

        renderTimeline(timelineNode, timelineType);
    });
})();