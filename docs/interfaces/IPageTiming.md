[Documentation](../README.md) / [Exports](../modules.md) / IPageTiming

# Interface: IPageTiming

## Implemented by

- [`PageTiming`](../classes/PageTiming.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [connection\_time](IPageTiming.md#connection_time)
- [dom\_complete](IPageTiming.md#dom_complete)
- [download\_time](IPageTiming.md#download_time)
- [duration\_time](IPageTiming.md#duration_time)
- [fetch\_end](IPageTiming.md#fetch_end)
- [fetch\_start](IPageTiming.md#fetch_start)
- [first\_input\_delay](IPageTiming.md#first_input_delay)
- [largest\_contentful\_paint](IPageTiming.md#largest_contentful_paint)
- [request\_sent\_time](IPageTiming.md#request_sent_time)
- [time\_to\_interactive](IPageTiming.md#time_to_interactive)
- [time\_to\_secure\_connection](IPageTiming.md#time_to_secure_connection)
- [waiting\_time](IPageTiming.md#waiting_time)

## Properties

### connection\_time

• `Optional` **connection\_time**: `number`

time to connect to a server
the time it takes until the connection with a server is established (in milliseconds)

#### Defined in

main.ts:149979

___

### dom\_complete

• `Optional` **dom\_complete**: `number`

time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds)

#### Defined in

main.ts:149970

___

### download\_time

• `Optional` **download\_time**: `number`

time it takes for a browser to receive a response (in milliseconds)

#### Defined in

main.ts:149989

___

### duration\_time

• `Optional` **duration\_time**: `number`

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Defined in

main.ts:149991

___

### fetch\_end

• `Optional` **fetch\_end**: `number`

time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page

#### Defined in

main.ts:149997

___

### fetch\_start

• `Optional` **fetch\_start**: `number`

time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page

#### Defined in

main.ts:149994

___

### first\_input\_delay

• `Optional` **first\_input\_delay**: `number`

Core Web Vitals metric indicating the responsiveness of a page
The time (in milliseconds) from when a user first interacts with your page to the time when the browser responds to that interaction. Learn more.

#### Defined in

main.ts:149976

___

### largest\_contentful\_paint

• `Optional` **largest\_contentful\_paint**: `number`

Core Web Vitals metric measuring how fast the largest above-the-fold content element is displayed
The amount of time (in milliseconds) to render the largest content element visible in the viewport, from when the user requests the URL. Learn more.

#### Defined in

main.ts:149973

___

### request\_sent\_time

• `Optional` **request\_sent\_time**: `number`

time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds)

#### Defined in

main.ts:149985

___

### time\_to\_interactive

• `Optional` **time\_to\_interactive**: `number`

Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds)

#### Defined in

main.ts:149967

___

### time\_to\_secure\_connection

• `Optional` **time\_to\_secure\_connection**: `number`

time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds)

#### Defined in

main.ts:149982

___

### waiting\_time

• `Optional` **waiting\_time**: `number`

time to first byte (TTFB) in milliseconds

#### Defined in

main.ts:149987
