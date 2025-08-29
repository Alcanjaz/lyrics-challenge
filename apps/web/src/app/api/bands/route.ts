import bands from '../../../../mock_data/bands.json';

export async function GET(request: Request) {
  return new Response(JSON.stringify(bands));
}
