**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataGooglePlayInfoOrganicSerpElementItem

# Interface: IAppDataGooglePlayInfoOrganicSerpElementItem

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

ID of the app

#### Source

main.ts:187875

***

### description?

> **`optional`** **description**: `string`

description of the app

#### Source

main.ts:187883

***

### developer?

> **`optional`** **developer**: `string`

name of the app developer

#### Source

main.ts:187901

***

### developer\_address?

> **`optional`** **developer\_address**: `string`

physical address of the developer

#### Source

main.ts:187909

***

### developer\_email?

> **`optional`** **developer\_email**: `string`

email address of the developer

#### Source

main.ts:187907

***

### developer\_id?

> **`optional`** **developer\_id**: `string`

ID of the app developer

#### Source

main.ts:187903

***

### developer\_url?

> **`optional`** **developer\_url**: `string`

URL to the developer page on Google Play

#### Source

main.ts:187905

***

### developer\_website?

> **`optional`** **developer\_website**: `string`

official website of the developer

#### Source

main.ts:187911

***

### genres?

> **`optional`** **genres**: `string`[]

app genres
contains relevant app categories

#### Source

main.ts:187945

***

### icon?

> **`optional`** **icon**: `string`

URL to the app icon

#### Source

main.ts:187881

***

### images?

> **`optional`** **images**: `string`[]

app images
contains URLs to the images published on the app page on Google Play

#### Source

main.ts:187933

***

### installs?

> **`optional`** **installs**: `string`

number of installs of the app
approximate number of installs as displayed on the app page

#### Source

main.ts:187896

***

### installs\_count?

> **`optional`** **installs\_count**: `number`

number of installs of the app
the exact number of installs of the app

#### Source

main.ts:187899

***

### is\_free?

> **`optional`** **is\_free**: `boolean`

indicates whether the app is free

#### Source

main.ts:187891

***

### last\_update\_date?

> **`optional`** **last\_update\_date**: `string`

date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:187927

***

### main\_category?

> **`optional`** **main\_category**: `string`

main category of the app

#### Source

main.ts:187893

***

### minimum\_os\_version?

> **`optional`** **minimum\_os\_version**: `string`

minimum OS version required to install the app

#### Source

main.ts:187915

***

### more\_apps\_by\_developer?

> **`optional`** **more\_apps\_by\_developer**: [`AppsInfo`](../classes/AppsInfo.md)[]

similar apps
information about apps built by the same developer

#### Source

main.ts:187942

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values: left

#### Source

main.ts:187873

***

### price?

> **`optional`** **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of the app

#### Source

main.ts:187889

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed apps
absolute position among all apps on the list

#### Source

main.ts:187870

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:187867

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Source

main.ts:187887

***

### released\_date?

> **`optional`** **released\_date**: `string`

date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:187922

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews the app has

#### Source

main.ts:187885

***

### similar\_apps?

> **`optional`** **similar\_apps**: [`AppsInfo`](../classes/AppsInfo.md)[]

similar apps
displays apps similar to the app in a POST request

#### Source

main.ts:187939

***

### size?

> **`optional`** **size**: `string`

size of the app

#### Source

main.ts:187917

***

### tags?

> **`optional`** **tags**: `string`[]

app tags
contains relevant app tags

#### Source

main.ts:187948

***

### title?

> **`optional`** **title**: `string`

title of the app

#### Source

main.ts:187877

***

### update\_notes?

> **`optional`** **update\_notes**: `string`

update notes
contains the latest update notes from the developer

#### Source

main.ts:187930

***

### url?

> **`optional`** **url**: `string`

URL to the app page on Google Play

#### Source

main.ts:187879

***

### version?

> **`optional`** **version**: `string`

current version of the app

#### Source

main.ts:187913

***

### videos?

> **`optional`** **videos**: `string`[]

app videos
contains URLs to the video published on the app page on Google Play

#### Source

main.ts:187936
