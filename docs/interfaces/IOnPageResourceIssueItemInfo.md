[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IOnPageResourceIssueItemInfo

# Interface: IOnPageResourceIssueItemInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### column?

> `optional` **column**: `number`

column where the error was found

#### Defined in

main.ts:158033

***

### line?

> `optional` **line**: `number`

line where the error was found

#### Defined in

main.ts:158031

***

### message?

> `optional` **message**: `string`

text message of the error
the full list of possible HTML errors can be found here

#### Defined in

main.ts:158036

***

### status\_code?

> `optional` **status\_code**: `number`

status code of the error
possible values:
0 — Unidentified Error;
501 — Html Parse Error;
1501 — JS Parse Error;
2501 — CSS Parse Error;
3501 — Image Parse Error;
3502 — Image Scale Is Zero;
3503 — Image Size Is Zero;
3504 — Image Format Invalid

#### Defined in

main.ts:158047
