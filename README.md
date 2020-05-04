# BookWorm

Mission Statement:
BookWorm helps productivity hackers increase efficiency by making webpages distraction free and interactive with a portfolio homepage organizer to allow for better research history and tab management.

![Thumbnail for BookWorm](https://github.com/BookWorm-Github/BookWorm/blob/master/frontend/portfolio_homepage/public/bookworm.png)


BookWorm currently has a Chrome Extension, written using Javascript, CSS, and HTML, that is used to implement features for active reading. After being set off by a pop-up that appears, the extension goes through phases that censor parts of the text and summarize passages, for example. This allows the user to go through a more efficient process of looking at a passage and understanding the main points. Overall, the importance of his project lies in how it can assist those with learning disabilities. While it may initially be overwhelming to see [seemingly] endless paragraphs of text, BookWorm breaks them down to provide you with a more user-friendly, understandable series of text. <br>
<br>
In order to run this extension, all the files of code that are included in this repository can be downloaded into the same repository on your machine. Then, by accessing chrome://extensions on the browser (making sure "Developer Mode" in the top right is toggled on),
they can be used in the Chrome extensions menu by pressing "Load unpacked" and selecting the directory that the files are located in (on your machine). Finally, the extension will be executeable in your browser to be used on webpages that are accessed thereafter. <br>

More on Devpost:
https://devpost.com/software/bookworm-t0586n

### Project Setup:

##### install the directory:

first
```
Go to Bookworm --> frontend --> portfolio_homepage
```
then execute

```
Npm install
```
  
##### To build chrome extension:
```
Npm run build 
```
  
##### To configure chrome extension into Google Chrome web browser:
In Chrome web browser
```
More tools –> extensions -> turn developer mode on 
```
then 
```
click Load Unpackaged
```
and
```
select folder at ...\BookWorm\frontend\portfolio_homepage\build
```
##### Then in console run:
```
Npm start 
```




