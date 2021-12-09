import React, { useEffect, useState } from 'react';
import Search from 'antd/es/input/Search';
import { Avatar, Layout, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './header.css';
import logo2 from '../../assets/HRF_Logo2.png';
import { useOktaAuth } from '@okta/okta-react';
import { useLocation, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchDocs } from '../../state/actions';

const { Header } = Layout;

function MainHeader(props) {
  const [showHeader, setShowHeader] = useState();

  let lastScroll = 0;
  useEffect(() => {
    setShowHeader(true);
    // console.log('useeffect scrollY', window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll <= 0) {
      setShowHeader(true);
      // console.log('currentscroll <= 0');
    }
    if (currentScroll > lastScroll) {
      setShowHeader(false);
      // console.log('currentscroll > lastscroll', showHeader);
    }
    if (currentScroll < lastScroll) {
      setShowHeader(true);
    }
    lastScroll = currentScroll;
    console.log(
      'last: ',
      lastScroll,
      'current: ',
      currentScroll,
      'showHeader: ',
      showHeader
    );
  };

  const { searchDocs } = props;
  const {
    authService: { logout },
    authState,
  } = useOktaAuth();
  const { pathname } = useLocation();

  if (pathname === '/login') return null;

  const onSearch = value => {
    if (!value) return alert('Search bar cannot be empty');
    searchDocs(value, authState);
  };

  return (
    <Layout class={`${showHeader ? 'show' : 'hidden'}`}>
      <Header className={`header_div`}>
        <img src={logo2} className="header_img" alt="HRF logo" />
        <Search
          className={`search_bar ${showHeader ? 'show' : 'hidden'}`}
          placeholder="Search"
          onSearch={onSearch}
        />
        <Link to="/">
          <Button type="default">Bookmarks</Button>
        </Link>
        <Button onClick={logout} type="default">
          Logout
        </Button>
        <Avatar size={45} icon={<UserOutlined />} />
      </Header>
    </Layout>
  );
}
export default connect(null, { searchDocs })(MainHeader);
