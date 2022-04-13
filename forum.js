var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        date: Date.now(),
        content: "Thread content",
        comments: [

        ]
    },
    {
        id: 2,
        title: "Thread 2",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}