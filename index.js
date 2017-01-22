
'use strict';

var os = require('os'),
    v8 = require('v8'),
    info = {};

info.eol = { answer: os.EOL, description: 'A string constant defining the operating system-specific end-of-line marker'};

info.arch = { answer: os.arch(), description: 'The os.arch() method returns a string identifying the operating system CPU architecture for which the Node.js binary was compiled.'};

info.cpus = { answer: os.cpus(), description:  `The os.cpus() method returns an array of objects containing information about each CPU/core installed. 
The properties included on each object include:
    model <String>
    speed <number> (in MHz)
    times <Object>
        user <number> The number of milliseconds the CPU has spent in user mode.
        nice <number> The number of milliseconds the CPU has spent in nice mode.
        sys <number> The number of milliseconds the CPU has spent in sys mode.
        idle <number> The number of milliseconds the CPU has spent in idle mode.
        irq <number> The number of milliseconds the CPU has spent in irq mode.`};

info.endianness = { answer: os.endianness(), description: `The os.endianness() method returns a string identifying the endianness of the CPU for which the Node.js binary was compiled. \
     Possible values are:
     'BE' for big endian
     'LE' for little endian.` };

info.freemem = { answer: os.freemem(), description: `The os.freemem() method returns the amount of free system memory in bytes as an integer.`};

info.homedir = { answer: os.homedir(), description: `The os.homedir() method returns the home directory of the current user as a string.` };

info.hostname = { answer: os.hostname(), description:  `The os.hostname() method returns the hostname of the operating system as a string.`};

info.loadavg = { answer: os.loadavg(), description:  `The os.loadavg() method returns an array containing the 1, 5, and 15 minute load averages.

The load average is a measure of system activity, calculated by the operating system and expressed as a fractional number. As a rule of thumb, the load average should ideally be less than the number of logical CPUs in the system.

The load average is a UNIX-specific concept with no real equivalent on Windows platforms. On Windows, the return value is always [0, 0, 0].`};

info.networkInterfaces = { answer: os.networkInterfaces(), description:  `The os.networkInterfaces() method returns an object containing only network interfaces that have been assigned a network address.

Each key on the returned object identifies a network interface. The associated value is an array of objects that each describe an assigned network address.

The properties available on the assigned network address object include:

address <String> The assigned IPv4 or IPv6 address
netmask <String> The IPv4 or IPv6 network mask
family <String> Either IPv4 or IPv6
mac <String> The MAC address of the network interface
internal <boolean> true if the network interface is a loopback or similar interface that is not remotely accessible; otherwise false
scopeid <number> The numeric IPv6 scope ID (only specified when family is IPv6)`};

info.platform = { answer: os.platform(), description:  `The os.platform() method returns a string identifying the operating system platform as set during compile time of Node.js.

Currently possible values are:
    
    'aix'
    'darwin'
    'freebsd'
    'linux'
    'openbsd'
    'sunos'
    'win32'
Equivalent to process.platform.

Note: The value 'android' may also be returned if the Node.js is built on the Android operating system. However, Android support in Node.js is considered to be experimental at this time.`};


info.release = { answer: os.release(), description:  `The os.release() method returns a string identifying the operating system release.

Note: On POSIX systems, the operating system release is determined by calling uname(3). On Windows, GetVersionExW() is used. Please see https://en.wikipedia.org/wiki/Uname#Examples for more information.`};

info.tmpdir = { answer: os.tmpdir(), description:  `The os.tmpdir() method returns a string specifying the operating system's default directory for temporary files.`};

info.totalmem = { answer: os.totalmem(), description:  `The os.totalmem() method returns the total amount of system memory in bytes as an integer.`};

info.type = { answer: os.type(), description:  `The os.type() method returns a string identifying the operating system name as returned by uname(3). For example 'Linux' on Linux, 'Darwin' on OS X and 'Windows_NT' on Windows.

Please see https://en.wikipedia.org/wiki/Uname#Examples for additional information about the output of running uname(3) on various operating systems.`};

info.uptime = { answer: os.uptime(), description:  `The os.uptime() method returns the system uptime in number of seconds.

Note: Within Node.js' internals, this number is represented as a double. However, fractional seconds are not returned and the value can typically be treated as an integer.`};

info.userInfo = { answer: os.userInfo, description:  `The os.userInfo() method returns information about the currently effective user -- on POSIX platforms, this is typically a subset of the password file. The returned object includes the username, uid, gid, shell, and homedir. On Windows, the uid and gid fields are -1, and shell is null.

The value of homedir returned by os.userInfo() is provided by the operating system. This differs from the result of os.homedir(), which queries several environment variables for the home directory before falling back to the operating system response.`};

info.v8Heap = { answer: v8.getHeapStatistics(), description: `Returns an object with the following properties:

    total_heap_size <number>
    total_heap_size_executable <number>
    total_physical_size <number>
    total_available_size <number>
    used_heap_size <number>
    heap_size_limit <number>
    malloced_memory <number>
    peak_malloced_memory <number>
    does_zap_garbage <number>
    does_zap_garbage is a 0/1 boolean, which signifies whether the --zap_code_space option is enabled or not. This makes V8 overwrite heap garbage with a bit pattern. The RSS footprint (resident memory set) gets bigger because it continuously touches all heap pages and that makes them less likely to get swapped out by the operating system.
` };

info.v8HeapSpace = { answer: 'TBD', description: `Returns statistics about the V8 heap spaces, i.e. the segments which make up the V8 heap. Neither the ordering of heap spaces, nor the availability of a heap space can be guaranteed as the statistics are provided via the V8 GetHeapSpaceStatistics function and may change from one V8 version to the next.

The value returned is an array of objects containing the following properties:

    space_name <string>
    space_size <number>
    space_used_size <number>
    space_available_size <number>
    physical_space_size <number>
`};

module.exports = info;
