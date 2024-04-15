**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IPageMetaInfo

# Interface: IPageMetaInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### broken\_html?

> **`optional`** **broken\_html**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

resource errors and warnings

#### Source

main.ts:150021

***

### canonical?

> **`optional`** **canonical**: `string`

canonical page

#### Source

main.ts:149974

***

### charset?

> **`optional`** **charset**: `number`

code page
example: 65001

#### Source

main.ts:149959

***

### content?

> **`optional`** **content**: [`HtmlContentInfo`](../classes/HtmlContentInfo.md)

overall information about content of the page

#### Source

main.ts:150008

***

### cumulative\_layout\_shift?

> **`optional`** **cumulative\_layout\_shift**: `number`

Core Web Vitals metric measuring the layout stability of the page
measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page. Learn more.

#### Source

main.ts:150003

***

### deprecated\_tags?

> **`optional`** **deprecated\_tags**: `string`[]

deprecated tags on the page

#### Source

main.ts:150010

***

### description?

> **`optional`** **description**: `string`

content of the meta description tag

#### Source

main.ts:149968

***

### description\_length?

> **`optional`** **description\_length**: `number`

length of the description tag in characters

#### Source

main.ts:149996

***

### duplicate\_meta\_tags?

> **`optional`** **duplicate\_meta\_tags**: `string`[]

duplicate meta tags on the page

#### Source

main.ts:150012

***

### external\_links\_count?

> **`optional`** **external\_links\_count**: `number`

number of external links on the page

#### Source

main.ts:149978

***

### favicon?

> **`optional`** **favicon**: `string`

favicon of the page

#### Source

main.ts:149970

***

### follow?

> **`optional`** **follow**: `boolean`

indicates whether a page’s ‘meta robots’ allows crawlers to follow the links on the page
if false, the page’s ‘meta robots’ tag contains “nofollow” parameter instructing crawlers not to follow the links on the page

#### Source

main.ts:149962

***

### generator?

> **`optional`** **generator**: `string`

meta tag generator

#### Source

main.ts:149964

***

### htags?

> **`optional`** **htags**: `Object`

HTML header tags

#### Index signature

 \[`key`: `string`\]: `string`[]

#### Source

main.ts:149966

***

### images\_count?

> **`optional`** **images\_count**: `number`

number of images on the page

#### Source

main.ts:149982

***

### images\_size?

> **`optional`** **images\_size**: `number`

total size of images on the page measured in bytes

#### Source

main.ts:149984

***

### inbound\_links\_count?

> **`optional`** **inbound\_links\_count**: `number`

number of internal links pointing at the page

#### Source

main.ts:149980

***

### internal\_links\_count?

> **`optional`** **internal\_links\_count**: `number`

number of internal links on the page

#### Source

main.ts:149976

***

### meta\_keywords?

> **`optional`** **meta\_keywords**: `string`

content of the keywords meta tag

#### Source

main.ts:149972

***

### meta\_title?

> **`optional`** **meta\_title**: `string`

meta title of the page
meta tag in the head section of an HTML document that defines the title of a page

#### Source

main.ts:150006

***

### render\_blocking\_scripts\_count?

> **`optional`** **render\_blocking\_scripts\_count**: `number`

number of scripts on the page that block page rendering

#### Source

main.ts:149998

***

### render\_blocking\_stylesheets\_count?

> **`optional`** **render\_blocking\_stylesheets\_count**: `number`

number of CSS styles on the page that block page rendering

#### Source

main.ts:150000

***

### scripts\_count?

> **`optional`** **scripts\_count**: `number`

number of scripts on the page

#### Source

main.ts:149986

***

### scripts\_size?

> **`optional`** **scripts\_size**: `number`

total size of scripts on the page measured in bytes

#### Source

main.ts:149988

***

### social\_media\_tags?

> **`optional`** **social\_media\_tags**: `Object`

object of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:150019

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Source

main.ts:150015

***

### stylesheets\_count?

> **`optional`** **stylesheets\_count**: `number`

number of stylesheets on the page

#### Source

main.ts:149990

***

### stylesheets\_size?

> **`optional`** **stylesheets\_size**: `number`

total size of stylesheets on the page measured in bytes

#### Source

main.ts:149992

***

### title?

> **`optional`** **title**: `string`

page title

#### Source

main.ts:149956

***

### title\_length?

> **`optional`** **title\_length**: `number`

length of the title tag in characters

#### Source

main.ts:149994
