<!--
ERROR: 

What Causes the "0308010c:digital envelope routines::unsupported" Error?
You are likely getting this error because of 2 main reasons:

you’re not using the LTS (long term support) version of Node JS. You can see I’m using Node 17.0.0, which is not an LTS version of Node.
you’re using react-script with a version less than 5
The error can also occur because you’re using Node 17.

How to Fix the "0308010c:digital envelope routines::unsupported" Error
There are at least 3 ways by which you can fix this error. We are going to look at them one by one. Any of them should work for you.

Pass --openssl-legacy-provider to Webpack or the CLI Tool
In a React app, for instance, you can pass --openssl-legacy-provider to the start script like this "react-scripts --openssl-legacy-provider start".

That should do it. But if this fails to fix the error, then proceed to the next fix. On many occasions, it works.

Use an LTS Version of Node JS
Consider downgrading your Node version to 16.16.0 or other LTS versions.

Currently, 18.12.1 is the latest LTS version of Node. You can download it from the Node JS official website or use NVM to install it.

Upgrade React Script to Version 5+
If you’re working with React and this still fails to fix the error for you, then it’s likely an issue with your React script.

If you’re using a React script version less than 5, then you should upgrade it to version 5+.

In my case, I’m currently using react-scripts 3.4.3:

As already pointed out in this article, if you are getting the "0308010c:digital envelope routines::unsupported" error, then it could happen you’re not using an LTS version of Node JS, or you’re using react-scripts version <5.

Hopefully the fixes we discussed in this tutorial help you fix this error. If any of the fixes fail to work for you, then you should try the others. In my case, upgrading react-scripts to 5+ was what worked for me.

 -->