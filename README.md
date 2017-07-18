# crbug-738739 demonstration

Test whether `<script type="module">` tags work in Chrome extensions. Currently, this test fails in Chrome 61.0.3160.0 (Canary) with the following error in the console:

```
index.js:1 Failed to load module script: The server responded with a non-JavaScript MIME type of "". Strict MIME type checking is enforced for module scripts per HTML spec.
```

After installing the extension, press the browser action button to open the HTML page which should load the script module.
