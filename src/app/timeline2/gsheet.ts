// import { google } from 'googleapis'

// export async function getGoogleSheetsData(range: string, timelinecat: string) {
//   const auth = await google.auth.getClient({
//     projectId: 'linkedin-leadsby',
//     credentials: {
//       type: 'service_account',
//       private_key:
//         '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCZnDdAXKWQnJoP\nLYG0QNW5Uq+mkPgnDFrvCDgJTs63lM7txR9qLXOh5kwVt10mdXnegBna//Xq771o\nJUgAHCT5W312PigXjXDZsIYlBDc4hwFOXMaJQALucrByrzZP2CScKOuQGJYts/M3\nT1l5nhu1mkgCUSovhzcNxHSdVBeVaTF5LK0rV052j2/vZg0/AfJWgracmO20cJBI\nslsMBLJy5ffO1Pq5Ptvrf+xw60Ld/cpIuBlAM9etP8WGv3KJHM1XlBVcFf1RAR4C\nZZwG5cy7ggP+drnCTtdczKFHGD7qJQGXErE4y93KZRVcUep+wmjDbZ+8DVRIxhlB\njMzCGBe3AgMBAAECggEAQSkntOk4IGqV3ZdfvG9+WgFt2noHkkTm9Bvn7WbdQLni\nt7EVfOxv7z8qilHAtXZC7rQng6Ntla4CCkI6UzWdJ5v8UiLWzfrlYqrDlMM/i36V\nesDXRVR+idjj6ZpSrzcQfJ/NIVCUsCl0JEPIQFNmDLi4ECeO/h9dJr1t/Gk2Id4X\n6q3dVU0eBRBmZiafPwH5//2316ICet/HoX1nfWpOprovurDjnohj4apCDWeMOuL/\nm7x9aKMCbw33MwsUOrmRyeXusKcv5dtD0rJcrmodtRwet35BBTpCkDHokLKJHdOP\ngynfj3b+EwNj3Bs9KREdlB8LY02pi1Jf08kqvr0eRQKBgQDId7Wdq4FZ2ItPVVLB\nqWVJIAshPNMMarsEz1PyuFZzWJtMK724vKnow+pEnHcQxNucSXpC52qhtg019JiY\nfOF7AVYw2tVBK6fIAPGUvr0FOKFQDy0NPxcGam1EBVAZjiypG5oLAwNP2/pSWEQu\ndb9STUROAjgt1KNWbNDReoV2lQKBgQDEKZVyyJVG4316FH9FJFPMhd6mmsJY+LDP\nxoH+bAU/Wwm0grQd1b2M/aOEVZjc0bS3+qn+d4nVN1zvlAvQLGrLtsgDoiIBfWdH\n0NcMWA9Ambrq4pzTgrattzChAK+tF+UWbYtmdhvSVhv8COHw8bnVQkLnpn6PTlcj\nL9ol8Xq+GwKBgBXrcQJihGxMjz8Hd1sRqK+MP2tM+U68ROLLwMQjf+Bw6do0VjRi\n/Lkk4vLJoQNGYzT9m87A+xnfjCZALodN8GHAzand47+ShHAMGl5HVOfDP3A/mI+A\nPIZJENWFNzL0JtH+4KMfmzcaOI7Uc/AYk+jt5fAZsgbg31NN5q9hFELZAoGAbqXi\nJc/c3BKgCYecTnzyQ9BTSfjLnXISEfEwDDoUL6uDau26+YVCGVBMtu2tfwlO/eQH\nlYEKH1nOM1l33GHhj603X01KDzsUUd8MHmthlxff5nQS7/+wWYaWiIqhjWqID0GV\nOyNuCBQITv8Xq1g+cXuhz5cLlnwjDLcGPxbaHHcCgYEAiJZ1BpxJULiBAy8G1325\n7/ygI6T5znUjUq0QjoSOyVmgdRicAIU/XOjN4ORKzdYAcWTzaGz+pWwNd87vapMs\n+Px6j/QjnH2hJSq26I7ozoJMby6fC3a6wvuEoEj7jWlvnIs3KPXIQb8zmeGnHEy3\nNzfemhaqsXQAErpKIHSWC68=\n-----END PRIVATE KEY-----\n',
//       client_email: 'linkedin-leadsby@linkedin-leadsby.iam.gserviceaccount.com',
//       client_id: '111727511482809108444',
//       token_url: 'https://oauth2.googleapis.com/token',
//       universe_domain: 'googleapis.com',
//     },
//     scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
//   })

//   const sheets = google.sheets({ version: 'v4', auth })

//   if(timelinecat === 'biblical-overview'){

//     const spreadsheetId = '1nsr2vF0l4ZmYnwjNUW-2ICPGTyojoCKavOHteBUrrok'
//   }else if(timelinecat === 'old-testament-events'){
//     const spreadsheetId = '1U3G3YaIXdR1Z-oHt_MCcaVkwgW1FxxH1_uqIecoAcGM'
//   }else if(timelinecat === 'new-testament-events'){
//     const spreadsheetId = '1N9Lk1jRkUrahoZk7WuEUcX7YwWAqvQFEZuOvAn6Oo04'
//   }else if(timelinecat === 'old-testament-books'){
//     const spreadsheetId = '1fqrz9mju9JzCUfnc_2jblzawwGE-q_2X8GT2e-AjLgU'
//   }else if(timelinecat === 'new-testament-books'){
//     const spreadsheetId = '1N-wCuj2BgZO1K84fFokZMKxnBjeEyKPWgP_GEzOMpcM'
//   }

//   const data = await sheets.spreadsheets.values.get({
//     spreadsheetId: spreadsheetId,
//     range: range,
//   })

//   return data.data.values
// }

import { google } from 'googleapis'

interface SpreadsheetIds {
  [key: string]: string
}

const SPREADSHEET_IDS: SpreadsheetIds = {
  'biblical-overview': '1nsr2vF0l4ZmYnwjNUW-2ICPGTyojoCKavOHteBUrrok',
  'old-testament-events': '1U3G3YaIXdR1Z-oHt_MCcaVkwgW1FxxH1_uqIecoAcGM',
  'new-testament-events': '1N9Lk1jRkUrahoZk7WuEUcX7YwWAqvQFEZuOvAn6Oo04',
  'old-testament-books': '1fqrz9mju9JzCUfnc_2jblzawwGE-q_2X8GT2e-AjLgU',
  'new-testament-books': '1N-wCuj2BgZO1K84fFokZMKxnBjeEyKPWgP_GEzOMpcM',
}

const authConfig = {
  projectId: 'linkedin-leadsby',
  credentials: {
    type: 'service_account',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCZnDdAXKWQnJoP\nLYG0QNW5Uq+mkPgnDFrvCDgJTs63lM7txR9qLXOh5kwVt10mdXnegBna//Xq771o\nJUgAHCT5W312PigXjXDZsIYlBDc4hwFOXMaJQALucrByrzZP2CScKOuQGJYts/M3\nT1l5nhu1mkgCUSovhzcNxHSdVBeVaTF5LK0rV052j2/vZg0/AfJWgracmO20cJBI\nslsMBLJy5ffO1Pq5Ptvrf+xw60Ld/cpIuBlAM9etP8WGv3KJHM1XlBVcFf1RAR4C\nZZwG5cy7ggP+drnCTtdczKFHGD7qJQGXErE4y93KZRVcUep+wmjDbZ+8DVRIxhlB\njMzCGBe3AgMBAAECggEAQSkntOk4IGqV3ZdfvG9+WgFt2noHkkTm9Bvn7WbdQLni\nt7EVfOxv7z8qilHAtXZC7rQng6Ntla4CCkI6UzWdJ5v8UiLWzfrlYqrDlMM/i36V\nesDXRVR+idjj6ZpSrzcQfJ/NIVCUsCl0JEPIQFNmDLi4ECeO/h9dJr1t/Gk2Id4X\n6q3dVU0eBRBmZiafPwH5//2316ICet/HoX1nfWpOprovurDjnohj4apCDWeMOuL/\nm7x9aKMCbw33MwsUOrmRyeXusKcv5dtD0rJcrmodtRwet35BBTpCkDHokLKJHdOP\ngynfj3b+EwNj3Bs9KREdlB8LY02pi1Jf08kqvr0eRQKBgQDId7Wdq4FZ2ItPVVLB\nqWVJIAshPNMMarsEz1PyuFZzWJtMK724vKnow+pEnHcQxNucSXpC52qhtg019JiY\nfOF7AVYw2tVBK6fIAPGUvr0FOKFQDy0NPxcGam1EBVAZjiypG5oLAwNP2/pSWEQu\ndb9STUROAjgt1KNWbNDReoV2lQKBgQDEKZVyyJVG4316FH9FJFPMhd6mmsJY+LDP\nxoH+bAU/Wwm0grQd1b2M/aOEVZjc0bS3+qn+d4nVN1zvlAvQLGrLtsgDoiIBfWdH\n0NcMWA9Ambrq4pzTgrattzChAK+tF+UWbYtmdhvSVhv8COHw8bnVQkLnpn6PTlcj\nL9ol8Xq+GwKBgBXrcQJihGxMjz8Hd1sRqK+MP2tM+U68ROLLwMQjf+Bw6do0VjRi\n/Lkk4vLJoQNGYzT9m87A+xnfjCZALodN8GHAzand47+ShHAMGl5HVOfDP3A/mI+A\nPIZJENWFNzL0JtH+4KMfmzcaOI7Uc/AYk+jt5fAZsgbg31NN5q9hFELZAoGAbqXi\nJc/c3BKgCYecTnzyQ9BTSfjLnXISEfEwDDoUL6uDau26+YVCGVBMtu2tfwlO/eQH\nlYEKH1nOM1l33GHhj603X01KDzsUUd8MHmthlxff5nQS7/+wWYaWiIqhjWqID0GV\nOyNuCBQITv8Xq1g+cXuhz5cLlnwjDLcGPxbaHHcCgYEAiJZ1BpxJULiBAy8G1325\n7/ygI6T5znUjUq0QjoSOyVmgdRicAIU/XOjN4ORKzdYAcWTzaGz+pWwNd87vapMs\n+Px6j/QjnH2hJSq26I7ozoJMby6fC3a6wvuEoEj7jWlvnIs3KPXIQb8zmeGnHEy3\nNzfemhaqsXQAErpKIHSWC68=\n-----END PRIVATE KEY-----\n',
    client_email: 'linkedin-leadsby@linkedin-leadsby.iam.gserviceaccount.com',
    client_id: '111727511482809108444',
    token_url: 'https://oauth2.googleapis.com/token',
    universe_domain: 'googleapis.com',
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
}

export async function getGoogleSheetsData(range: string, timelinecat: string) {
  try {
    const auth = await google.auth.getClient(authConfig)
    const sheets = google.sheets({ version: 'v4', auth })
    console.log(timelinecat)

    const spreadsheetId = await SPREADSHEET_IDS[timelinecat]

    if (!spreadsheetId) {
      throw new Error('Invalid timeline category')
    }

    const data = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    })

    return data.data.values
  } catch (error) {
    console.error('An error occurred:', error)
    throw error
  }
}
