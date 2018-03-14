<html lang="{{ app()->getLocale() }}">
<!DOCTYPE html>

  @include('inc.welcome._head')

<body id="page-top">

  @include('inc.welcome._nav')

    @yield('content')

  @include('inc.welcome._scripts')

  @include('inc.welcome._footer')

</body>
</html>
