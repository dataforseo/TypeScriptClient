[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAnalysisContentInfo

# Interface: IAnalysisContentInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### author?

> `optional` **author**: `string`

author of the content

#### Defined in

main.ts:166251

***

### connotation\_types?

> `optional` **connotation\_types**: `object`

connotation types
contains types of sentiments (sentiment polarity) related to the given citation and probability index per each sentiment type
possible sentiment connotation types: positive, negative, neutral

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:166271

***

### content\_quality\_score?

> `optional` **content\_quality\_score**: `number`

content quality score
this value is calculated based on the number of words, sentences and characters the content contains

#### Defined in

main.ts:166282

***

### content\_type?

> `optional` **content\_type**: `string`

type of content
example:
page_content, comment

#### Defined in

main.ts:166240

***

### date\_published?

> `optional` **date\_published**: `string`

date and time when the content was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

main.ts:166279

***

### group\_date?

> `optional` **group\_date**: `string`

citation group date and time
indicates content publication date or date and time when our crawler visited the page for the first time;
this field can be used to group citations by date and display citation trends;
date and time are provided in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

main.ts:166297

***

### highlighted\_text?

> `optional` **highlighted\_text**: `string`

highlighted text from the snippet

#### Defined in

main.ts:166260

***

### language?

> `optional` **language**: `string`

content language
to obtain a full list of available languages, refer to the Languages endpoint

#### Defined in

main.ts:166263

***

### level?

> `optional` **level**: `number`

title heading level
indicates h-tag level from 1 (top) to 6 (bottom)

#### Defined in

main.ts:166249

***

### main\_title?

> `optional` **main\_title**: `string`

page title

#### Defined in

main.ts:166244

***

### previous\_title?

> `optional` **previous\_title**: `string`

title of the previous content block

#### Defined in

main.ts:166246

***

### rating?

> `optional` **rating**: [`ContentAnalysisRatingInfo`](../classes/ContentAnalysisRatingInfo.md)

content rating
rating related to content_info

#### Defined in

main.ts:166290

***

### semantic\_location?

> `optional` **semantic\_location**: `string`

semantic location
indicates semantic element in HTML where the target keyword citation is located
example:
article, header

#### Defined in

main.ts:166287

***

### sentiment\_connotations?

> `optional` **sentiment\_connotations**: `object`

sentiment connotations
contains sentiments (emotional reactions) related to the given citation and probability index per each sentiment
possible sentiment connotations: anger, happiness, love, sadness, share, fun

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:166267

***

### snippet?

> `optional` **snippet**: `string`

content snippet

#### Defined in

main.ts:166253

***

### snippet\_length?

> `optional` **snippet\_length**: `number`

character length of the snippet

#### Defined in

main.ts:166255

***

### social\_metrics?

> `optional` **social\_metrics**: [`SocialMetricsInfo`](../classes/SocialMetricsInfo.md)[]

social media engagement metrics
data on social media interactions associated with the content based on website embeds developed and supported by social media platforms

#### Defined in

main.ts:166258

***

### text\_category?

> `optional` **text\_category**: `number`[]

text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

main.ts:166274

***

### title?

> `optional` **title**: `string`

title of the result

#### Defined in

main.ts:166242
